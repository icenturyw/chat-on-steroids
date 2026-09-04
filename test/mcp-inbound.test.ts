import { describe, expect, it } from 'vitest';
import {
  inboundOpenAiSession,
  inboundRequestId,
  openAiConversationKey,
  openAiSessionFromHeader,
  requestIdFromHeader,
  withInboundOpenAiSession,
  withInboundRequestId
} from '../src/main/mcp/inbound.js';

describe('MCP inbound request id boundary', () => {
  it('normalizes the raw x-request-id to the page join key once at ingress', () => {
    expect(requestIdFromHeader('wfr_01a014bdd7cd7a15b6b533d3ce2b42f2/yqy1')).toBe(
      'wfr_01a014bdd7cd7a15b6b533d3ce2b42f2'
    );
    expect(requestIdFromHeader('  wfr_abc_123/relay-hop')).toBe('wfr_abc_123');
    expect(requestIdFromHeader(['wfr_only/a'])).toBe('wfr_only');
    expect(requestIdFromHeader(['wfr_first/a', 'wfr_second/b'])).toBeNull();

    expect(requestIdFromHeader('/missing-base')).toBeNull();
    expect(requestIdFromHeader('wfr.bad/suffix')).toBeNull();
    expect(requestIdFromHeader('x'.repeat(101))).toBeNull();
    expect(requestIdFromHeader(undefined)).toBeNull();
  });

  it('keeps normalized ids isolated across concurrent async requests', async () => {
    const seen = await Promise.all([
      withInboundRequestId('wfr_a', async () => {
        await new Promise((resolve) => setTimeout(resolve, 10));
        return inboundRequestId();
      }),
      withInboundRequestId('wfr_b', async () => {
        await Promise.resolve();
        return inboundRequestId();
      })
    ]);

    expect(seen).toEqual(['wfr_a', 'wfr_b']);
    expect(inboundRequestId()).toBeNull();
  });

  it('keeps the modern OpenAI conversation session request-local and stores only a digest key', async () => {
    const raw = 'v1/opaque-session-value';
    expect(openAiSessionFromHeader(raw)).toBe(raw);
    expect(openAiSessionFromHeader([raw])).toBe(raw);
    expect(openAiSessionFromHeader([raw, 'v1/other'])).toBeNull();
    expect(openAiSessionFromHeader('')).toBeNull();
    expect(openAiSessionFromHeader('x'.repeat(513))).toBeNull();

    const key = openAiConversationKey(raw);
    expect(key).toMatch(/^oai-[0-9a-f]{40}$/);
    expect(key).not.toContain(raw);
    expect(openAiConversationKey(raw)).toBe(key);
    expect(openAiConversationKey('v1/other-session')).not.toBe(key);

    const seen = await withInboundOpenAiSession(raw, async () => {
      await Promise.resolve();
      return inboundOpenAiSession();
    });
    expect(seen).toBe(raw);
    expect(inboundOpenAiSession()).toBeNull();
  });
});
