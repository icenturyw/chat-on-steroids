import { session } from 'electron';
import { envValue, setEnvValue, type MutableEnvironment } from '../env.js';
import { logWarn } from '../logger.js';

/** Go's HTTP transport reads proxy environment variables, not the OS/browser settings. */
export async function applySystemProxy(env: MutableEnvironment): Promise<void> {
  if (['CONTROL_PLANE_HTTP_PROXY', 'TUNNEL_CLIENT_HTTP_PROXY'].some(key => envValue(env, key)?.trim())) return;

  const target = envValue(env, 'CONTROL_PLANE_BASE_URL') || 'https://api.openai.com';
  let protocol: string;
  let route: string;
  try {
    protocol = new URL(target).protocol;
    if (protocol !== 'https:' && protocol !== 'http:') return;
    const variable = protocol === 'https:' ? 'HTTPS_PROXY' : 'HTTP_PROXY';
    if ([variable, variable.toLowerCase()].some(key => envValue(env, key)?.trim())) return;
    route = ((await session.defaultSession.resolveProxy(target)).split(';')[0] ?? '').trim();
  } catch {
    // Do not log proxy URLs: they can contain credentials. Keep the client's existing policy.
    logWarn('Tunnel system proxy lookup failed; keeping the inherited network configuration.');
    return;
  }
  if (route === 'DIRECT') return;

  // Follow the first elected route only. SOCKS (v4) cannot be translated to Go's SOCKS5.
  const match = /^(PROXY|HTTPS|SOCKS5)\s+(\S+)$/.exec(route);
  const scheme = match?.[1] === 'PROXY' ? 'http' : match?.[1] === 'HTTPS' ? 'https' : 'socks5';
  let proxy: URL;
  try {
    if (!match) throw new Error('Unsupported proxy route');
    proxy = new URL(`${scheme}://${match[2]}`);
    if (!proxy.hostname || proxy.username || proxy.password || (proxy.pathname !== '/' && proxy.pathname !== '') || proxy.search || proxy.hash) {
      throw new Error('Invalid proxy endpoint');
    }
  } catch {
    logWarn('Tunnel system proxy route is unsupported; keeping the inherited network configuration.');
    return;
  }

  // Environment routing retains NO_PROXY, and HTTP loopback MCP calls remain direct.
  // Keep this child-only: local tools and the app's own network settings have other owners.
  setEnvValue(env, protocol === 'https:' ? 'HTTPS_PROXY' : 'HTTP_PROXY', proxy.href);
}
