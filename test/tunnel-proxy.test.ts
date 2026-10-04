import { beforeEach, describe, expect, it, vi } from 'vitest';
import { type MutableEnvironment } from '../src/main/env.js';

const resolveProxy = vi.hoisted(() => vi.fn(async (_url: string) => 'DIRECT'));
vi.mock('electron', () => ({ session: { defaultSession: { resolveProxy } } }));

const { applySystemProxy } = await import('../src/main/tunnel/proxy.js');

beforeEach(() => { resolveProxy.mockReset().mockResolvedValue('DIRECT'); });

describe('tunnel system proxy routing', () => {
  it.each([
    ['PROXY 127.0.0.1:10808', 'http://127.0.0.1:10808/'],
    ['HTTPS proxy.example:8443', 'https://proxy.example:8443/'],
    ['SOCKS5 [::1]:1080', 'socks5://[::1]:1080'],
    ['PROXY proxy.example:8080; DIRECT', 'http://proxy.example:8080/']
  ])('inherits the elected route %s', async (route, expected) => {
    resolveProxy.mockResolvedValue(route);
    const env: MutableEnvironment = { NO_PROXY: 'localhost,127.0.0.1,api.openai.com', MCP_SERVER_URL: 'url=http://127.0.0.1:1234/secret,channel=main' };
    await applySystemProxy(env);
    expect(resolveProxy).toHaveBeenCalledWith('https://api.openai.com');
    expect(env.HTTPS_PROXY).toBe(expected);
    expect(env.HTTP_PROXY).toBeUndefined();
    expect(env.NO_PROXY).toBe('localhost,127.0.0.1,api.openai.com');
    expect(env.MCP_SERVER_URL).toBe('url=http://127.0.0.1:1234/secret,channel=main');
  });

  it.each(['CONTROL_PLANE_HTTP_PROXY', 'TUNNEL_CLIENT_HTTP_PROXY', 'HTTPS_PROXY', 'https_proxy'])(
    'preserves the explicit %s configuration', async key => {
      const env = { [key]: 'http://chosen.example:8080' };
      await applySystemProxy(env);
      expect(env).toEqual({ [key]: 'http://chosen.example:8080' });
      expect(resolveProxy).not.toHaveBeenCalled();
    }
  );

  it('keeps an HTTP proxy while resolving the separate HTTPS route', async () => {
    resolveProxy.mockResolvedValue('PROXY proxy.example:8080');
    const env: MutableEnvironment = { HTTP_PROXY: 'http://http-only.example:8080' };
    await applySystemProxy(env);
    expect(env.HTTP_PROXY).toBe('http://http-only.example:8080');
    expect(env.HTTPS_PROXY).toBe('http://proxy.example:8080/');
  });

  it.each(['HTTP_PROXY', 'http_proxy'])('preserves %s for an HTTP control plane', async key => {
    const env = { [key]: 'http://chosen.example:8080', CONTROL_PLANE_BASE_URL: 'http://control.example' };
    await applySystemProxy(env);
    expect(env[key]).toBe('http://chosen.example:8080');
    expect(resolveProxy).not.toHaveBeenCalled();
  });

  it.each(['DIRECT', 'DIRECT; PROXY later.example:8080', 'SOCKS proxy.example:1080', 'PROXY user:password@proxy.example:8080', 'PROXY proxy.example:99999', 'PROXY proxy.example:8080/path', ''])('does not guess a replacement for %s', async route => {
    resolveProxy.mockResolvedValue(route);
    const env = {};
    await applySystemProxy(env);
    expect(env).toEqual({});
  });

  it('resolves the actual overridden control plane and preserves its protocol', async () => {
    resolveProxy.mockResolvedValue('PROXY proxy.example:8080');
    const env: MutableEnvironment = { CONTROL_PLANE_BASE_URL: 'http://control.example' };
    await applySystemProxy(env);
    expect(resolveProxy).toHaveBeenCalledWith('http://control.example');
    expect(env.HTTP_PROXY).toBe('http://proxy.example:8080/');
    expect(env.HTTPS_PROXY).toBeUndefined();
  });

  it('retains the inherited environment when the OS lookup fails', async () => {
    resolveProxy.mockRejectedValue(new Error('private diagnostic'));
    const env = { NO_PROXY: 'localhost' };
    await applySystemProxy(env);
    expect(env).toEqual({ NO_PROXY: 'localhost' });
  });
});
