/**
 * Renderer-only localisation. Application state and recorded/user-authored text stay in
 * their canonical form; this layer translates only visible chrome after it is painted.
 */

const ZH_CN: Record<string, string> = {
  'Not set up yet': '尚未设置',
  'No tunnel yet': '尚无隧道',
  'Not connected': '未连接',
  Connecting: '正在连接',
  Starting: '正在启动',
  Connected: '已连接',
  'No internet': '无网络连接',
  'Sign-in failed': '身份验证失败',
  'Tunnel unavailable': '隧道不可用',
  'no handshake yet': '尚未完成握手',
  Disconnecting: '正在断开',
  Offline: '已离线',
  Error: '错误',
  Connect: '连接',
  Disconnect: '断开连接',
  'Get it': '获取更新',
  Permissions: '权限',
  'Read-only': '只读',
  'Look at files': '查看文件',
  'Change files': '修改文件',
  'See and use the desktop': '查看并操作桌面',
  'Run programs': '运行程序',
  'Session recording': '会话记录',
  'Sub-agents': '子代理',
  'session tool exposed': '已公开 session 工具',
  'agents tool exposed': '已公开 agents 工具',
  Folders: '文件夹',
  Add: '添加',
  'Nothing shared yet. Press Add or drop a folder here. ChatGPT sees short names like':
    '尚未共享任何文件夹。点击“添加”或将文件夹拖到此处。ChatGPT 只会看到类似',
  '— your real system paths are never sent.': '— 系统中的真实路径绝不会发送出去。',
  Health: '连接健康',
  'Run checks': '运行检查',
  'Checking…': '正在检查…',
  'verified link': '已验证链路',
  'last ChatGPT call': '最后一次 ChatGPT 调用',
  'Route to OpenAI': '到 OpenAI 的路由',
  'Tools across Core + Desktop': 'Core + Desktop 工具',
  Activity: '活动',
  SESSIONS: '会话',
  Refresh: '刷新',
  Copy: '复制',
  Home: '首页',
  Setup: '设置',
  Chat: '会话',
  'Show all steps': '显示全部步骤',
  'Hide finished steps': '隐藏已完成步骤',
  'Pick a folder to share': '选择要共享的文件夹',
  'None yet': '尚未选择',
  'Nothing outside the folders you approve is reachable. Do this first — the tunnel will not start with nothing to serve.':
    '只能访问你批准的文件夹。请先完成此步骤——没有可提供的文件夹时，隧道不会启动。',
  'Create a tunnel': '创建隧道',
  Tunnels: '隧道',
  'on the OpenAI platform and create one. Pick the': '并在 OpenAI 平台创建一个。请选择',
  'same workspace you use in ChatGPT': '与你在 ChatGPT 中使用的同一工作区',
  '— a tunnel in another workspace will not show up later. Then copy its ID.':
    '——其他工作区中的隧道之后不会显示。然后复制它的 ID。',
  'Open Tunnels': '打开隧道页面',
  'Tunnel ID — Core connector': '隧道 ID — Core 连接器',
  'Tunnel ID — Desktop connector': '隧道 ID — Desktop 连接器',
  optional: '可选',
  'Screen and mouse/keyboard control are a separate connector, so they need a second tunnel. Create another one and paste its ID here. Leave it empty to keep desktop control off in ChatGPT.':
    '屏幕与鼠标/键盘控制使用独立连接器，因此需要第二条隧道。再创建一条并将其 ID 粘贴到这里；留空则不会在 ChatGPT 中启用桌面控制。',
  'Create an API key': '创建 API 密钥',
  'Create a key of type': '创建类型为',
  Restricted: '受限',
  'and give it only': '并仅授予',
  'Tunnels: Read': '隧道：读取',
  and: '和',
  'Tunnels: Use': '隧道：使用',
  '. Leave everything else on': '。其余权限均保持为',
  None: '无',
  '. Copy it once — the platform will not show it again.': '。请立即复制，平台之后不会再次显示。',
  'Open API keys': '打开 API 密钥页面',
  'Tunnel API key': '隧道 API 密钥',
  'Remove stored API key': '删除已保存的 API 密钥',
  'Start the tunnel': '启动隧道',
  'Six steps, once. Custom MCP apps need ChatGPT': '只需完成以下六个步骤。自定义 MCP 应用需要在网页端开启 ChatGPT',
  'Developer mode': '开发者模式',
  'on the web. Full write/modify MCP is currently available to Business, Enterprise and Edu; Pro custom MCP is limited to read/fetch access.':
    '。完整的写入/修改 MCP 当前面向 Business、Enterprise 和 Edu；Pro 自定义 MCP 仅限读取/获取。',
  'Choose folder': '选择文件夹',
  'Leave it running while you use the connector. It stays in the tray when you close the window.':
    '使用连接器期间请保持运行；关闭窗口后它会留在系统托盘。',
  'Leave it running while you use the connector. It stays available from the menu bar and Dock when you close the window.':
    '使用连接器期间请保持运行；关闭窗口后仍可从菜单栏和程序坞访问。',
  'Leave it running while you use the connector. It stays available when you close the window.':
    '使用连接器期间请保持运行；关闭窗口后它仍会继续可用。',
  'Hide the window to the menu bar when closed': '关闭时将窗口隐藏到菜单栏',
  'Connected. Paste the URL below into ChatGPT as a custom connector.':
    '已连接。请将下方 URL 作为自定义连接器地址粘贴到 ChatGPT。',
  'Add it in ChatGPT': '添加到 ChatGPT',
  'Turn on': '开启',
  'in ChatGPT — currently under': '（位于 ChatGPT 的',
  'Settings → Apps → Advanced settings': '设置 → 应用 → 高级设置',
  ', with workspace-managed plans also exposing custom apps from their Apps area. Then create one app per card below — the required one, plus the optional desktop one if you want it. Each card is a separate app in ChatGPT:':
    '）；工作区管理的套餐也可从“应用”区域创建自定义应用。然后按下方每张卡片分别创建一个应用：必需的 Core，以及需要桌面控制时使用的 Desktop。',
  'Use the exact name and description from the card — copy them, do not invent your own.':
    '请原样复制卡片中的名称和说明，不要自行改写。',
  'For the connection, paste the URL below into': '连接时，将下方 URL 粘贴到',
  'MCP server URL': 'MCP 服务器 URL',
  'For authentication, scroll to the very bottom and pick': '身份验证请滚动到最底部并选择',
  'No authentication': '无身份验证',
  'This app is protected by a secret address, not by a login.': '此应用由保密地址保护，不使用登录验证。',
  REQUIRED: '必需',
  Published: '已发布',
  'Files, patches and the terminal. Required — this is the coding connector.':
    '文件、补丁和终端。这是必需的编码连接器。',
  NAME: '名称',
  DESCRIPTION: '说明',
  'MCP SERVER URL': 'MCP 服务器 URL',
  'Anyone with this URL can use your enabled tools. Do not share it.':
    '任何获得此 URL 的人都能使用你启用的工具，请勿分享。',
  'Not created in ChatGPT yet — ChatGPT has never called this connector.':
    '尚未在 ChatGPT 中完成连接——ChatGPT 从未调用过此连接器。',
  'Screenshots, windows, mouse/keyboard control and the clipboard. Optional — connect it only if you want desktop automation.':
    '屏幕截图、窗口、鼠标键盘控制和剪贴板。可选——仅在需要桌面自动化时连接。',
  'Open Apps': '打开应用设置',
  'Add the Chrome extension': '添加 Chrome 扩展',
  Open: '打开',
  'chrome://extensions': 'chrome://extensions',
  ', turn on': '，开启',
  ', choose': '，选择',
  'Load unpacked': '加载已解压的扩展程序',
  'and pick the folder the button opens. It pairs with this app by itself — there is no code to type.':
    '并选择按钮所打开的文件夹。扩展会自动与本应用配对，无需输入代码。',
  'Required for sub-agents:': '子代理必需：',
  'the companion extension must be loaded and connected in ChatGPT. Without it, Chat On Steroids cannot identify, open or coordinate worker chats.':
    '配套扩展必须已加载并连接 ChatGPT；否则 Chat On Steroids 无法识别、打开或协调工作器会话。',
  'Open extension folder': '打开扩展文件夹',
  'Download extension ZIP': '下载扩展 ZIP',
  'Disconnect browser': '断开浏览器',
  'Advanced — method, program, startup': '高级 — 连接方式、程序与启动',
  Method: '连接方式',
  'OpenAI Secure MCP Tunnel (recommended)': 'OpenAI 安全 MCP 隧道（推荐）',
  'Cloudflare quick tunnel': 'Cloudflare 快速隧道',
  'Cloudflare tunnel': 'Cloudflare 隧道',
  'Local only — I run my own tunnel': '仅本地 — 我自行运行隧道',
  'ChatGPT reaches this computer through an OpenAI tunnel. Nothing is exposed to the open internet.':
    'ChatGPT 通过 OpenAI 隧道连接到这台电脑，不会向公网直接暴露任何服务。',
  'This app only listens on localhost. You are responsible for exposing it.':
    '本应用仅监听 localhost；如需外部访问，由你自行负责暴露服务。',
  'Uses an existing Cloudflare named tunnel and fixed hostname. No new tunnel is created.':
    '使用现有的 Cloudflare 命名隧道和固定主机名，不会创建新隧道。',
  'Creates a temporary public https address with Cloudflare. The address changes on every restart.':
    '通过 Cloudflare 创建临时公网 HTTPS 地址；每次重启后地址都会变化。',
  'Cloudflare mode': 'Cloudflare 模式',
  'Quick tunnel — temporary address': '快速隧道 — 临时地址',
  'Named tunnel — existing fixed address': '命名隧道 — 现有固定地址',
  'In Cloudflare, create a published application route for this hostname and set its Service to http://localhost:<the port below>. Get the tunnel token from Add a replica and paste it here.':
    '请先在 Cloudflare 中为该主机名创建 Published application 路由，并将 Service 设置为 http://localhost:<下方端口>。然后从“Add a replica”获取 Tunnel Token 并粘贴到这里。',
  'Existing public origin': '现有公网地址',
  'Use the hostname already routed to this Cloudflare tunnel. The app adds its secret MCP path.':
    '填写已经路由到此 Cloudflare 隧道的主机名；应用会自动附加保密的 MCP 路径。',
  'Configured origin port': '已配置的源站端口',
  'This must match the localhost port configured for the existing tunnel.':
    '必须与现有隧道配置的 localhost 端口一致。',
  'Tunnel token': '隧道 Token',
  'Paste the existing tunnel token': '粘贴现有隧道 Token',
  'Remove stored tunnel token': '删除已保存的隧道 Token',
  'The existing tunnel token is stored with secure OS credential storage.':
    '现有隧道 Token 已保存在操作系统的安全凭据存储中。',
  'Stored with secure OS credential storage. It is never shown again.':
    '将使用操作系统的安全凭据存储保存，之后不会再次显示。',
  'Secure credential storage is unavailable.': '安全凭据存储不可用。',
  'Tunnel program': '隧道程序',
  'Bundled with this app': '已内置于本应用',
  'Browse…': '浏览…',
  'Connect automatically at startup': '启动时自动连接',
  'Keep running when closed': '关闭窗口后继续运行',
  'Keep running in the tray when closed': '关闭窗口后在托盘继续运行',
  'Privacy screenshots: default to the active window instead of the whole monitor':
    '隐私截图：默认仅截取活动窗口，而非整个显示器',
  'No session selected': '未选择会话',
  'Untitled session': '未命名会话',
  Sessions: '会话',
  'Nothing recorded yet. Turn on recording in Settings, pair the Chrome extension, and this fills up as you work in ChatGPT.':
    '目前还没有记录。请在设置中开启会话记录并配对 Chrome 扩展，之后使用 ChatGPT 时这里会自动填充。',
  Timeline: '时间线',
  Handoff: '交接',
  'No events for this session yet. Tool calls are recorded here as they happen; what ChatGPT shows on screen arrives from the browser extension.':
    '此会话暂时没有事件。工具调用会实时记录在这里；ChatGPT 页面上的显示内容由浏览器扩展同步。',
  'Latest handoff': '最新交接内容',
  'Keep recordings': '保留记录',
  'Then delete them. 0 keeps everything. Recording itself is a permission.':
    '超过保留期限后自动删除。0 表示永久保留。会话记录本身也受权限控制。',
  days: '天',
  'Compact automatically': '自动压缩与续聊',
  tokens: 'Token',
  Goal: '目标',
  Loop: '循环',
  'OpenRouter API key': 'OpenRouter API 密钥',
  'Remove stored key': '删除已保存的密钥',
  'Open OpenRouter keys': '打开 OpenRouter 密钥页面',
  Model: '模型',
  'Select model': '选择模型',
  'Load 20 more': '再加载 20 个',
  Reasoning: '推理强度',
  'Default lets the provider decide, which is right for nearly every model. The rest cost more and take longer.':
    '默认由模型提供商决定，适用于绝大多数模型。其他档位通常成本更高、耗时更长。',
  Default: '默认',
  Minimal: '最低',
  Low: '低',
  Medium: '中',
  High: '高',
  'Goal prompt, no task': '目标提示词（无独立任务）',
  'Used while Goal is on in a chat that carries no task of its own. There is no goal to hand over, so the model reads the requirements out of your own messages in the chat, keeps ChatGPT going against them, and answers NO_REPLY once they are all met.':
    '用于开启“目标”且会话本身没有独立任务时。模型会从你在会话中的消息读取要求，持续驱动 ChatGPT 完成这些要求，并在全部满足后返回 NO_REPLY。',
  'Goal prompt, with a task': '目标提示词（有独立任务）',
  'Used instead of the above once a chat carries a task of its own. The task itself is sent word for word underneath this prompt on every single turn — it is the requirements, and ChatGPT\'s account of them does not count. Stops once the task is completely done. This is also the prompt that writes the opening message of a chat you start from a task.':
    '当会话带有独立任务时使用此提示词。每一轮都会把任务原文附在提示词下方，并以该任务原文作为要求；任务彻底完成后停止。通过任务启动新会话时，首条消息也由此提示词生成。',
  'Loop prompt': '循环提示词',
  'Used instead of both of the above whenever Loop is on — one prompt for both cases, because Loop never stops and so never has to decide whether the job is done. A task, if the chat has one, is sent underneath it exactly as above; without one the job is read out of your messages. A message goes out every turn until you switch Loop off.':
    '开启“循环”时统一使用此提示词。循环不会自行停止，因此不需要判断任务是否完成；有独立任务时会按上述方式附加任务原文，否则从你的消息中读取要求。直到你关闭“循环”为止，每一轮都会继续发送消息。',
  'Edit prompt': '编辑提示词',
  'Close prompt': '关闭提示词',
  'Saved when you leave the editor. Keep': '离开编辑器时自动保存。请保留',
  'as the exact stop response.': '作为精确的停止响应。',
  'Saved when you leave the editor. There is no stop response here - the app refuses one and asks again.':
    '离开编辑器时自动保存。这里没有停止响应——应用会拒绝停止响应并继续请求。',
  'Restore default': '恢复默认',
  'Sub-agent workers': '子代理工作器',
  'Requires the Chrome extension to be loaded and connected. This sets the most worker chats one run may open.':
    '需要 Chrome 扩展已加载并连接。此项设置单次运行最多可以打开多少个工作器会话。',
  max: '最多',
  'Allow unattributed calls': '允许未归属的调用',
  'Run self-contained calls even when the extension cannot prove which chat sent them. Activity stays visible as Unattributed.':
    '即使扩展无法确认调用来自哪个会话，也允许执行独立调用；活动记录中会标记为“未归属”。',
  'Recover other chats’ tabs': '恢复其他会话的标签页',
  'Reopen a missing chat, or reload a silent one once, for workers, primes and plain chats that have called tools. Goal and Loop chats are always recovered regardless. Duplicate chats are never opened.':
    '为调用过工具的工作器、主代理和普通会话重新打开缺失标签页，或对无响应标签页执行一次重载。“目标”和“循环”会话始终会恢复，并且不会打开重复会话。',
  'Clear swarm': '清除代理组',
  All: '全部',
  Problems: '问题',
  Text: '文本',
  'Desktop access needs attention': '需要处理桌面访问权限',
  'Request Accessibility': '请求辅助功能权限',
  'Open Screen Recording settings': '打开屏幕录制设置',
  'Open Accessibility settings': '打开辅助功能设置',
  'Switch to dark mode': '切换到深色模式',
  'Switch to light mode': '切换到浅色模式',
  'Loading models from OpenRouter…': '正在从 OpenRouter 加载模型…',
  'OpenRouter could not be reached. The model in use is unchanged.':
    '无法连接 OpenRouter，当前模型保持不变。',
  'No models came back.': '没有返回任何模型。',
  Close: '关闭',
  'Session deleted': '会话已删除',
  'Goal prompt (no task) restored to default': '无独立任务的目标提示词已恢复默认',
  'Goal prompt (with a task) restored to default': '有独立任务的目标提示词已恢复默认',
  'Loop prompt restored to default': '循环提示词已恢复默认',
  'OpenRouter key stored': 'OpenRouter 密钥已保存',
  'OpenRouter key removed': 'OpenRouter 密钥已删除',
  'Handoff copied': '交接内容已复制',
  'Swarm cleared': '代理组已清除',
  'Browser disconnected': '浏览器已断开连接',
  'Extension folder opened': '扩展目录已打开',
  'API key stored': 'API 密钥已保存',
  'API key removed': 'API 密钥已删除',
  'Cloudflare tunnel token stored': 'Cloudflare 隧道 Token 已保存',
  'Cloudflare tunnel token removed': 'Cloudflare 隧道 Token 已删除',
  'Choose a folder to share — step 1.': '请选择要共享的文件夹 — 第 1 步。',
  'Create a tunnel and paste its ID — step 2.': '请创建隧道并粘贴其 ID — 第 2 步。',
  'Add a restricted API key — step 3.': '请添加受限 API 密钥 — 第 3 步。',
  'cloudflared was not found on this computer.': '此电脑上未找到 cloudflared。',
  'Add the existing Cloudflare public origin.': '请填写现有 Cloudflare 公网地址。',
  'Add the existing Cloudflare tunnel token.': '请填写现有 Cloudflare 隧道 Token。',
  'Not needed for this method.': '此连接方式不需要该项。',
  'Not found. Install it, or choose the file with Browse.': '未找到。请安装该程序，或点击“浏览…”选择文件。',
  'not running': '未运行',
  off: '关闭',
  on: '开启'
};

const SKIP = '#timeline, #handoffBox, .feed, textarea, pre, code, script, style, [data-i18n-ignore]';

export function isSimplifiedChineseLocale(locale: string): boolean {
  const normalized = locale.replace('_', '-').toLowerCase();
  if (!normalized.startsWith('zh')) return false;
  return !/-(tw|hk|mo|hant)(-|$)/.test(normalized);
}

export function translateUiText(value: string): string {
  const normalized = value.replace(/\s+/g, ' ').trim();
  const exact = ZH_CN[value] ?? ZH_CN[normalized];
  if (exact) return exact;
  let match = /^(\d+) permissions?$/.exec(normalized);
  if (match) return `${match[1]} 项权限`;
  match = /^(\d+) problems?$/.exec(normalized);
  if (match) return `${match[1]} 个问题`;
  match = /^(\d+)\s+total\s+·\s+(\d+)\s+folders?$/.exec(normalized);
  if (match) return `共 ${match[1]} 个 · ${match[2]} 个文件夹`;
  match = /^(\d+) messages? · (\d+) tools?$/.exec(normalized);
  if (match) return `${match[1]} 条消息 · ${match[2]} 次工具调用`;
  match = /^(\d+) retained sessions? · (one|\d+) live now$/.exec(normalized);
  if (match) return `保留 ${match[1]} 个会话 · 当前 ${match[2] === 'one' ? '1' : match[2]} 个活动`;
  match = /^(\d+)(s|m|h|d) ago$/.exec(normalized);
  if (match) {
    const unit = { s: '秒', m: '分钟', h: '小时', d: '天' }[match[2] as 's' | 'm' | 'h' | 'd'];
    return `${match[1]} ${unit}前`;
  }
  match = /^Tools: (.+)$/.exec(normalized);
  if (match) return `工具：${match[1]}`;
  match = /^Connected\. Listening on (.+) · last message just now\.$/.exec(normalized);
  if (match) return `已连接。正在监听 ${match[1]} · 刚刚收到消息。`;
  match = /^Extension folder: (.+)$/.exec(normalized);
  if (match) return `扩展目录：${match[1]}`;
  match = /^Rename (\/.+)$/.exec(normalized);
  if (match) return `重命名 ${match[1]}`;
  match = /^Stop sharing (\/.+)$/.exec(normalized);
  if (match) return `停止共享 ${match[1]}`;
  match = /^Showing the (\d+) newest of (\d+), newest release first\.$/.exec(normalized);
  if (match) return `正在显示最新 ${match[1]} 个，共 ${match[2]} 个；按发布时间从新到旧排列。`;
  match = /^Goal model set to (.+)$/.exec(normalized);
  if (match) return `目标模型已设置为 ${match[1]}`;
  match = /^(\d+) characters · from (\d+) events \(~([^)]*) tokens\) · (.+)$/.exec(normalized);
  if (match) return `${match[1]} 个字符 · 来自 ${match[2]} 个事件（约 ${match[3]} Token）· ${match[4]}`;
  return value;
}

function localizeTextNode(node: Text): void {
  const parent = node.parentElement;
  if (!parent || parent.closest(SKIP)) return;
  const match = /^(\s*)(.*?)(\s*)$/s.exec(node.data);
  if (!match) return;
  const source = match[2] ?? '';
  const translated = translateUiText(source);
  if (translated !== source) node.data = `${match[1] ?? ''}${translated}${match[3] ?? ''}`;
}

function localizeElement(root: ParentNode): void {
  const view = document.defaultView;
  if (!view) return;
  const owner = root instanceof view.Element ? root : null;
  if (owner?.closest(SKIP)) return;
  const walker = document.createTreeWalker(root, view.NodeFilter.SHOW_TEXT);
  let node: Node | null;
  while ((node = walker.nextNode())) localizeTextNode(node as Text);
  const elements = [
    ...(owner ? [owner] : []),
    ...Array.from(root.querySelectorAll<HTMLElement>('[title], [aria-label], [placeholder]'))
  ];
  for (const element of elements) {
    if (element.closest(SKIP)) continue;
    for (const attribute of ['title', 'aria-label', 'placeholder']) {
      const value = element.getAttribute(attribute);
      if (value) element.setAttribute(attribute, translateUiText(value));
    }
  }
}

export function installUiLocale(
  locales: readonly string[] = document.defaultView?.navigator.languages ?? ['en']
): void {
  if (!locales.some(isSimplifiedChineseLocale)) return;
  const view = document.defaultView;
  if (!view) return;
  document.documentElement.lang = 'zh-CN';
  localizeElement(document.body);
  new view.MutationObserver((records) => {
    for (const record of records) {
      if (record.type === 'characterData') localizeTextNode(record.target as Text);
      if (record.type === 'attributes' && record.target instanceof view.Element) {
        const attribute = record.attributeName;
        if (attribute && ['title', 'aria-label', 'placeholder'].includes(attribute)) {
          const value = record.target.getAttribute(attribute);
          if (value) record.target.setAttribute(attribute, translateUiText(value));
        }
      }
      for (const node of record.addedNodes) {
        if (node.nodeType === view.Node.TEXT_NODE) localizeTextNode(node as Text);
        else if (node instanceof view.Element) localizeElement(node);
      }
    }
  }).observe(document.body, {
    childList: true,
    subtree: true,
    characterData: true,
    attributes: true,
    attributeFilter: ['title', 'aria-label', 'placeholder']
  });
}
