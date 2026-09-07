import { beforeEach, describe, expect, it, vi } from 'vitest';

const mocks = vi.hoisted(() => {
  const caps = {
    browse: true,
    search: true,
    read: true,
    metadata: true,
    create: false,
    edit: false,
    move: false,
    deleteFile: false,
    command: false,
    screen: false,
    control: false,
    clipboardRead: false,
    clipboardWrite: false
  };
  const config = {
    roots: [{ name: 'workspace', path: 'C:\\workspace' }],
    readOnly: true,
    capabilities: caps,
    tunnel: {
      kind: 'cloudflared',
      tunnelId: '',
      desktopTunnelId: '',
      binaryPath: '',
      cloudflareMode: 'quick' as 'quick' | 'named',
      cloudflarePublicUrl: '',
      cloudflareLocalPort: 28_767
    },
    ui: { privacyScreenshots: false },
    sessions: { record: false },
    multiAgent: { enabled: false }
  };
  return {
    caps,
    config,
    report: null as null | ((report: Record<string, unknown>) => void),
    starts: 0,
    prewarm: vi.fn(async () => undefined),
    endpointStop: vi.fn(async (_options?: { forceAfterMs?: number }) => undefined),
    endpointOptions: null as null | { port?: number; publicHostname?: string },
    surfaceTokens: null as null | Record<string, string>,
    publication: vi.fn((surface: string, observe: (name: string, version: string, instructions: string, tools: unknown[]) => void) => observe('Chat On Steroids ' + surface, '1', 'instructions', [])),
    endpointStartGate: null as Promise<void> | null,
    endpointStartError: null as NodeJS.ErrnoException | null,
    endpointStartReached: vi.fn(),
    tunnelStartGate: null as Promise<void> | null,
    tunnelStartReached: vi.fn(),
    tunnelStop: vi.fn(async () => undefined),
    tunnelOptions: null as null | Record<string, any>,
    secretGate: null as Promise<void> | null,
    secretReached: vi.fn(),
    secrets: {} as Record<string, string | null>
  };
});

vi.mock('../src/main/computer/index.js', () => ({ prewarmComputerHelper: mocks.prewarm }));

vi.mock('../src/main/config.js', () => ({
  getConfig: () => mocks.config,
  effectiveCapabilities: () => mocks.caps
}));

vi.mock('../src/main/logger.js', () => ({ logError: vi.fn(), logInfo: vi.fn(), logWarn: vi.fn() }));

vi.mock('../src/main/mcp/server.js', () => ({
  lastRequestAt: () => null,
  tunnelProbeHeaders: () => ({}),
  startMcpServer: vi.fn(async (
    _getContext: unknown,
    options: { port?: number; publicHostname?: string; surfaceTokens?: Record<string, string> } = {}
  ) => {
    mocks.endpointStartReached();
    mocks.endpointOptions = {
      ...(options.port === undefined ? {} : { port: options.port }),
      ...(options.publicHostname === undefined ? {} : { publicHostname: options.publicHostname })
    };
    mocks.surfaceTokens = options.surfaceTokens ?? null;
    if (mocks.endpointStartError) throw mocks.endpointStartError;
    if (mocks.endpointStartGate) await mocks.endpointStartGate;
    const port = options.port ?? 45_678;
    return {
      port,
      publication: mocks.publication,
      url: `http://127.0.0.1:${port}/mcp/core/core-token`,
      urls: {
        core: `http://127.0.0.1:${port}/mcp/core/core-token`,
        desktop: `http://127.0.0.1:${port}/mcp/desktop/desktop-token`
      },
      stop: mocks.endpointStop
    };
  })
}));

vi.mock('../src/main/mcp/tools.js', () => ({ lastToolCallAt: () => null }));
vi.mock('../src/main/secrets.js', () => ({
  getSecret: vi.fn(async (key: string) => {
    mocks.secretReached();
    if (mocks.secretGate) await mocks.secretGate;
    return mocks.secrets[key] ?? null;
  }),
  setSecret: vi.fn(async (key: string, value: string) => {
    mocks.secrets[key] = value;
  })
}));
vi.mock('../src/main/tunnel/index.js', () => ({
  TunnelError: class TunnelError extends Error {},
  startTunnel: vi.fn(async (options: { report: (report: Record<string, unknown>) => void } & Record<string, any>) => {
    mocks.starts += 1;
    mocks.tunnelOptions = options;
    mocks.report = options.report;
    mocks.tunnelStartReached();
    if (mocks.tunnelStartGate) await mocks.tunnelStartGate;
    options.report({
      state: 'connected',
      detail: 'Connected.',
      publicUrl: 'https://example.trycloudflare.com/mcp/core/core-token'
    });
    return { stop: mocks.tunnelStop };
  })
}));

describe('connection surface state', () => {
  beforeEach(() => {
    mocks.report = null;
    mocks.starts = 0;
    mocks.prewarm.mockClear();
    mocks.endpointStop.mockClear();
    mocks.publication.mockClear();
    mocks.endpointStartReached.mockClear();
    mocks.endpointOptions = null;
    mocks.surfaceTokens = null;
    mocks.endpointStartGate = null;
    mocks.endpointStartError = null;
    mocks.tunnelStartReached.mockClear();
    mocks.tunnelStartGate = null;
    mocks.tunnelStop.mockClear();
    mocks.tunnelOptions = null;
    mocks.secretReached.mockClear();
    mocks.secretGate = null;
    mocks.secrets = {};
    Object.assign(mocks.caps, {
      browse: true,
      search: true,
      read: true,
      metadata: true,
      create: false,
      edit: false,
      move: false,
      deleteFile: false,
      command: false,
      screen: false,
      control: false,
      clipboardRead: false,
      clipboardWrite: false
    });
    mocks.config.roots = [{ name: 'workspace', path: 'C:\\workspace' }];
    mocks.config.readOnly = true;
    mocks.config.tunnel.kind = 'cloudflared';
    mocks.config.tunnel.tunnelId = '';
    mocks.config.tunnel.binaryPath = '';
    mocks.config.tunnel.cloudflareMode = 'quick';
    mocks.config.tunnel.cloudflarePublicUrl = '';
    mocks.config.tunnel.cloudflareLocalPort = 28_767;
    vi.resetModules();
  });

  it('binds a quick Cloudflare tunnel to the configured stable localhost port', async () => {
    const connection = await import('../src/main/connection.js');

    await connection.connect();

    expect(mocks.endpointOptions).toEqual({ port: 28_767 });
    expect(mocks.tunnelOptions).toMatchObject({
      localUrl: 'http://127.0.0.1:28767/mcp/core/core-token',
      apiKey: null,
      cloudflareToken: null
    });
  });

  it('reports a clear error when the Cloudflare local MCP port is already occupied', async () => {
    mocks.endpointStartError = Object.assign(new Error('listen EADDRINUSE'), { code: 'EADDRINUSE' });
    const connection = await import('../src/main/connection.js');

    await connection.connect();

    expect(mocks.starts).toBe(0);
    expect(connection.getStatus()).toMatchObject({
      state: 'tunnel-unavailable',
      detail: 'Cloudflare local MCP port 28767 is already in use. Choose another Local MCP port.'
    });
  });

  it('persists one MCP path token per surface and reuses them after a module restart', async () => {
    const firstConnection = await import('../src/main/connection.js');

    await firstConnection.connect();
    const firstTokens = { ...mocks.surfaceTokens } as Record<string, string>;
    expect(firstTokens.core).toMatch(/^[A-Za-z0-9_-]{43}$/);
    expect(firstTokens.desktop).toMatch(/^[A-Za-z0-9_-]{43}$/);
    expect(firstTokens.core).not.toBe(firstTokens.desktop);
    expect(mocks.secrets.mcpCorePathToken).toBe(firstTokens.core);
    expect(mocks.secrets.mcpDesktopPathToken).toBe(firstTokens.desktop);

    await firstConnection.disconnect();
    vi.resetModules();
    const restartedConnection = await import('../src/main/connection.js');
    await restartedConnection.connect();

    expect(mocks.surfaceTokens).toEqual(firstTokens);
  });

  it('binds a named Cloudflare tunnel to its configured localhost port and fixed hostname', async () => {
    mocks.config.tunnel.cloudflareMode = 'named';
    mocks.config.tunnel.cloudflarePublicUrl = 'https://mcp.example.com/';
    mocks.config.tunnel.cloudflareLocalPort = 28_767;
    mocks.secrets.cloudflareTunnelToken = 'named-token-secret';
    const connection = await import('../src/main/connection.js');

    await connection.connect();

    expect(mocks.endpointOptions).toEqual({ port: 28_767, publicHostname: 'mcp.example.com' });
    expect(mocks.tunnelOptions).toMatchObject({
      localUrl: 'http://127.0.0.1:28767/mcp/core/core-token',
      apiKey: null,
      cloudflareToken: 'named-token-secret'
    });
  });

  it('refuses an invalid named Cloudflare origin before opening the local endpoint', async () => {
    mocks.config.tunnel.cloudflareMode = 'named';
    mocks.config.tunnel.cloudflarePublicUrl = 'http://mcp.example.com';
    mocks.secrets.cloudflareTunnelToken = 'named-token-secret';
    const connection = await import('../src/main/connection.js');

    await connection.connect();

    expect(mocks.endpointStartReached).not.toHaveBeenCalled();
    expect(connection.getStatus()).toMatchObject({
      state: 'tunnel-unavailable',
      detail: 'Enter the existing Cloudflare HTTPS origin, for example https://mcp.example.com.'
    });
  });

  it('reconnects when named Cloudflare routing changes but ignores a cosmetic trailing slash', async () => {
    mocks.config.tunnel.cloudflareMode = 'named';
    mocks.config.tunnel.cloudflarePublicUrl = 'https://mcp.example.com';
    mocks.secrets.cloudflareTunnelToken = 'named-token-secret';
    const connection = await import('../src/main/connection.js');

    await connection.connect();
    expect(mocks.starts).toBe(1);

    mocks.config.tunnel.cloudflarePublicUrl = 'https://mcp.example.com/';
    await connection.applySettings();
    expect(mocks.starts).toBe(1);

    mocks.config.tunnel.cloudflareLocalPort = 28_768;
    await connection.applySettings();
    expect(mocks.starts).toBe(2);
    expect(mocks.endpointOptions).toEqual({ port: 28_768, publicHostname: 'mcp.example.com' });
  });

  it('reconnects a quick Cloudflare tunnel when its stable local port changes', async () => {
    const connection = await import('../src/main/connection.js');

    await connection.connect();
    expect(mocks.starts).toBe(1);
    expect(mocks.endpointOptions).toEqual({ port: 28_767 });

    mocks.config.tunnel.cloudflareLocalPort = 28_768;
    await connection.applySettings();

    expect(mocks.starts).toBe(2);
    expect(mocks.endpointOptions).toEqual({ port: 28_768 });
  });

  it('publishes refresh declarations only for live surfaces and does not rebuild on unchanged health reports', async () => {
    const connection = await import('../src/main/connection.js');
    const refresh = await import('../src/main/plugin-refresh.js');
    expect(refresh.pluginRefreshPublications()).toEqual([]);
    await connection.connect();
    expect(refresh.pluginRefreshPublications().map(row => row.surface)).toEqual(['core']);
    const first = refresh.pluginRefreshPublications()[0]!.schemaId;
    const calls = mocks.publication.mock.calls.length;
    mocks.report?.({ state: 'connected', detail: 'Still healthy' });
    expect(mocks.publication).toHaveBeenCalledTimes(calls);
    await connection.applySettings();
    expect(refresh.pluginRefreshPublications()[0]!.schemaId).toBe(first);
    await connection.disconnect();
    expect(refresh.pluginRefreshPublications()).toEqual([]);
  });

  it('drops the previous tunnel state and URL from connector cards after disconnect', async () => {
    const connection = await import('../src/main/connection.js');

    await connection.connect();
    expect(connection.getStatus().surfaces.find((surface) => surface.id === 'core')).toMatchObject({
      state: 'live',
      publicUrl: 'https://example.trycloudflare.com/mcp/core/core-token'
    });

    await connection.disconnect();
    const disconnected = connection.getStatus();
    expect(disconnected.state).toBe('disconnected');
    expect(disconnected.surfaces.find((surface) => surface.id === 'core')).toMatchObject({
      state: 'off',
      localUrl: null,
      publicUrl: null,
      detail: ''
    });
  });

  it('keeps ordinary disconnect graceful and reserves forced MCP drain for final shutdown', async () => {
    const connection = await import('../src/main/connection.js');

    await connection.connect();
    await connection.disconnect();
    expect(mocks.endpointStop).toHaveBeenLastCalledWith();

    await connection.connect();
    await connection.shutdownConnection();
    expect(mocks.endpointStop).toHaveBeenLastCalledWith({ forceAfterMs: 30_000 });
  });

  it('cancels an MCP endpoint that finishes starting after final shutdown was requested', async () => {
    let releaseEndpoint!: () => void;
    mocks.endpointStartGate = new Promise<void>((resolve) => {
      releaseEndpoint = resolve;
    });
    const connection = await import('../src/main/connection.js');

    const connecting = connection.connect();
    await vi.waitFor(() => expect(mocks.endpointStartReached).toHaveBeenCalledTimes(1));
    const shuttingDown = connection.shutdownConnection();
    releaseEndpoint();
    await Promise.all([connecting, shuttingDown]);

    expect(mocks.starts).toBe(0);
    expect(mocks.prewarm).not.toHaveBeenCalled();
    expect(mocks.endpointStop).toHaveBeenCalledWith({ forceAfterMs: 30_000 });
    expect(connection.getStatus().state).toBe('disconnected');
  });

  it('does not publish a tunnel that finishes starting after final shutdown was requested', async () => {
    let releaseTunnel!: () => void;
    mocks.tunnelStartGate = new Promise<void>((resolve) => {
      releaseTunnel = resolve;
    });
    const connection = await import('../src/main/connection.js');

    const connecting = connection.connect();
    await vi.waitFor(() => expect(mocks.tunnelStartReached).toHaveBeenCalledTimes(1));
    const shuttingDown = connection.shutdownConnection();
    releaseTunnel();
    await Promise.all([connecting, shuttingDown]);

    expect(mocks.tunnelStop).toHaveBeenCalledTimes(1);
    expect(mocks.endpointStop).toHaveBeenCalledWith({ forceAfterMs: 30_000 });
    expect(connection.getStatus()).toMatchObject({ state: 'disconnected', publicUrl: null, localUrl: null });
  });

  it('tears down the local endpoint when Keychain lookup resumes after final shutdown', async () => {
    mocks.config.tunnel.kind = 'openai';
    let releaseSecret!: () => void;
    mocks.secretGate = new Promise<void>((resolve) => {
      releaseSecret = resolve;
    });
    const connection = await import('../src/main/connection.js');

    const connecting = connection.connect();
    await vi.waitFor(() => expect(mocks.secretReached).toHaveBeenCalledTimes(1));
    const shuttingDown = connection.shutdownConnection();
    releaseSecret();
    await Promise.all([connecting, shuttingDown]);

    expect(mocks.starts).toBe(0);
    expect(mocks.endpointStop).toHaveBeenCalledWith({ forceAfterMs: 30_000 });
    expect(connection.getStatus().state).toBe('disconnected');
  });

  it('keeps ordinary disconnect reconnectable while final shutdown remains terminal', async () => {
    const connection = await import('../src/main/connection.js');
    await connection.connect();
    await connection.disconnect();
    await connection.connect();
    expect(mocks.starts).toBe(2);
    expect(connection.getStatus().state).toBe('connected');

    await connection.shutdownConnection();
    await connection.connect();
    expect(mocks.starts).toBe(2);
    expect(connection.getStatus().state).toBe('disconnected');
  });

  it('shows terminal tunnel reports as connector errors instead of an endless starting state', async () => {
    const connection = await import('../src/main/connection.js');
    await connection.connect();

    mocks.report?.({ state: 'tunnel-unavailable', detail: 'cloudflared stopped unexpectedly' });

    const failed = connection.getStatus();
    expect(failed.state).toBe('tunnel-unavailable');
    expect(failed.surfaces.find((surface) => surface.id === 'core')).toMatchObject({
      state: 'error',
      detail: 'cloudflared stopped unexpectedly'
    });
  });

  it('reconnects Core when its transport method changes instead of mixing old and new methods', async () => {
    const connection = await import('../src/main/connection.js');
    await connection.connect();
    expect(mocks.starts).toBe(1);

    mocks.config.tunnel.kind = 'manual';
    await connection.applySettings();

    expect(mocks.starts).toBe(2);
    expect(connection.getStatus().state).toBe('connected');
  });

  it('prewarms the helper only when a native Desktop capability is published', async () => {
    mocks.caps.screen = true;
    const connection = await import('../src/main/connection.js');
    await connection.connect();
    // Windows and macOS have native helpers. Linux masks the same stored preference from the
    // live surface, so it intentionally does not prewarm anything.
    expect(mocks.prewarm).toHaveBeenCalledTimes(process.platform === 'win32' || process.platform === 'darwin' ? 1 : 0);
  });

  it('does not let a Desktop permission hide a missing root required by Core capabilities', async () => {
    mocks.config.roots = [];
    mocks.caps.screen = true;
    const connection = await import('../src/main/connection.js');

    await connection.connect();

    expect(mocks.starts).toBe(0);
    expect(connection.getStatus()).toMatchObject({
      state: 'disconnected',
      detail: 'Add a folder before connecting.'
    });
  });

  it('still requires a root for command even though command execution itself is not root-confined', async () => {
    mocks.config.roots = [];
    mocks.config.readOnly = false;
    Object.assign(mocks.caps, {
      browse: false,
      search: false,
      read: false,
      metadata: false,
      command: true,
      screen: true
    });
    const connection = await import('../src/main/connection.js');

    await connection.connect();

    expect(mocks.starts).toBe(0);
    expect(connection.getStatus().detail).toBe('Add a folder before connecting.');
  });

  it('keeps genuinely rootless Desktop and clipboard setups connectable', async () => {
    mocks.config.roots = [];
    Object.assign(mocks.caps, {
      browse: false,
      search: false,
      read: false,
      metadata: false,
      screen: true
    });
    const desktop = await import('../src/main/connection.js');
    await desktop.connect();
    expect(desktop.getStatus().state).toBe('connected');
    expect(mocks.starts).toBe(1);

    await desktop.disconnect();
    mocks.caps.screen = false;
    mocks.caps.clipboardRead = true;
    await desktop.connect();
    expect(desktop.getStatus().state).toBe('connected');
    expect(mocks.starts).toBe(2);
  });
});
