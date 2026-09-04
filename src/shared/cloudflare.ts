/** Cloudflare named-tunnel settings shared by main and renderer validation. */

export const DEFAULT_CLOUDFLARE_LOCAL_PORT = 28_766;

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
