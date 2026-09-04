/** Cloudflare tunnel settings shared by main and renderer validation. */

// Keep Cloudflare on a stable loopback port in both Quick and Named modes, matching
// coding-tools-mcp's desktop client model. 28766 is a common coding-tools-mcp port and
// may already be occupied when this app is being developed through that connector.
export const DEFAULT_CLOUDFLARE_LOCAL_PORT = 28_767;
export const DEFAULT_CLOUDFLARE_MODE = 'named' as const;
export const DEFAULT_CLOUDFLARE_PUBLIC_ORIGIN = 'https://chat-on-steroids.icenturyw.com';

/**
 * Accepts only a bare HTTPS origin and returns its canonical spelling.
 *
 * The MCP path is intentionally not configurable here: the app mints a fresh secret path on
 * every launch and appends it to this origin when publishing the connector URL.
 */
export function normalizeCloudflarePublicOrigin(value: string): string | null {
  const candidate = value.trim();
  if (!candidate) return null;
  try {
    const parsed = new URL(candidate);
    if (
      parsed.protocol !== 'https:' ||
      parsed.username ||
      parsed.password ||
      parsed.port ||
      parsed.pathname !== '/' ||
      parsed.search ||
      parsed.hash
    ) {
      return null;
    }
    return parsed.origin;
  } catch {
    return null;
  }
}
