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
  'just now': '刚刚',
  now: '刚刚',
  Disconnecting: '正在断开',
  Offline: '已离线',
  Error: '错误',
  Connect: '连接',
  Disconnect: '断开连接',
  'Get it': '获取更新',
  'Install update': '安装更新',
  'Install now': '立即安装',
  '← Back to chat': '← 返回会话',
  'Back to chat': '返回会话',
  'New chat': '新建会话',
  'Settings navigation': '设置导航',
  Workspace: '工作区',
  Usage: '用量统计',
  'YOUR ACTIVITY': '你的活动',
  'Agents & automation': '代理与自动化',
  Conversations: '会话',
  Settings: '设置',
  'Add a project folder': '添加项目文件夹',
  'Zoom out': '缩小',
  'Reset zoom': '重置缩放',
  'Zoom in': '放大',
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
  Health: '连接状态',
  'Run checks': '运行检查',
  'Checking…': '正在检查…',
  'verified link': '已验证链路',
  'verified ChatGPT link': '已验证 ChatGPT 链路',
  'last ChatGPT call': '最后一次 ChatGPT 调用',
  'waiting for first ChatGPT call': '等待 ChatGPT 首次调用',
  'Route to OpenAI': '到 OpenAI 的路由',
  'Connector route': '连接器链路',
  'ChatGPT → this app': 'ChatGPT → 本应用',
  waiting: '等待中',
  'Tools across Core + Desktop': 'Core + Desktop 工具',
  Activity: '活动',
  SESSIONS: '会话',
  Refresh: '刷新',
  Copy: '复制',
  Home: '首页',
  Setup: '接入向导',
  Chat: '会话',
  'Chat settings': '会话设置',
  'Show all steps': '显示全部步骤',
  'Hide finished steps': '隐藏已完成步骤',
  'Pick a folder to share': '选择要共享的文件夹',
  'Manage folders': '管理文件夹',
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
  required: '必需',
  'Not published': '未发布',
  Problem: '异常',
  Name: '名称',
  Description: '说明',
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
  'Uses a Cloudflare named tunnel started with its Tunnel Token and an existing fixed hostname.':
    '使用 Tunnel Token 启动 Cloudflare 命名隧道，并使用已配置的固定域名。',
  'Runs cloudflared against the configured local MCP port and discovers a temporary trycloudflare.com address.':
    '让 cloudflared 转发已配置的本地 MCP 端口，并自动获取临时 trycloudflare.com 地址。',
  'Cloudflare mode': 'Cloudflare 模式',
  'Quick tunnel — trycloudflare.com': '快速隧道 — trycloudflare.com',
  'Named tunnel — Tunnel Token + fixed domain': '命名隧道 — Tunnel Token + 固定域名',
  'Local MCP port': '本地 MCP 端口',
  'Cloudflare always forwards to this loopback port. Quick Tunnel uses it automatically; a Named Tunnel hostname must route to http://127.0.0.1:<this port>.':
    'Cloudflare 始终转发到这个本地回环端口。快速隧道会自动使用它；命名隧道的域名必须路由到 http://127.0.0.1:<此端口>。',
  'In Cloudflare, create a published application route for this hostname and point its Service at the Local MCP port above. Then copy the Tunnel Token from Add a replica and paste it here.':
    '请先在 Cloudflare 中为该主机名创建 Published application 路由，并将 Service 指向上面的本地 MCP 端口。然后从“Add a replica”复制 Tunnel Token 并粘贴到这里。',
  'Fixed public URL': '固定公网 URL',
  'Use the hostname already routed to this Cloudflare tunnel. The app adds its secret MCP path.':
    '填写已经路由到此 Cloudflare 隧道的主机名；应用会自动附加保密的 MCP 路径。',
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
  'Start Chat On Steroids when I sign in': '登录系统时启动 Chat On Steroids',
  'Developer mode: show turn boundaries and recovery events': '开发者模式：显示轮次边界和恢复事件',
  'Model availability and the work recorded in this workspace.': '查看模型可用情况，以及此工作区记录的使用情况。',
  'Calculating recorded tool usage…': '正在统计已记录的工具用量…',
  'Updating…': '正在更新…',
  'Usage could not be loaded. Try Refresh.': '无法加载用量数据，请点击“刷新”重试。',
  'Token activity per day': '每日 Token 用量',
  'Estimated context processed per tool call · last 52 weeks': '按工具调用估算的上下文处理量 · 最近 52 周',
  'Cost estimate per day': '每日成本估算',
  'Edit cost formula': '编辑成本公式',
  'Automatic baselines use Standard short-context cached-input prices, checked 7 September 2026:':
    '自动基准采用 Standard 短上下文的缓存输入价格，核对日期为 2026 年 9 月 7 日：',
  'These are editable cost comparisons, not actual bills.': '这些数值仅用于可编辑的成本对比，并非实际账单。',
  'Context times unique tool calls, divided by': '上下文 × 去重后的工具调用次数，再除以',
  'Changes estimated tokens and costs.': '用于调整 Token 与成本估算。',
  'Usage token divisor': '用量 Token 除数',
  'Cached-input cost multiplier': '缓存输入成本倍数',
  "Applied after each model's cached-input rate.": '在各模型缓存输入单价之后应用。',
  'Set per-model cached-input rates to compare costs.': '设置各模型的缓存输入单价以比较成本。',
  'Remaining usage per model': '各模型剩余用量',
  'Reported by ChatGPT. Shared pools and feature quotas are listed separately. Missing data means not reported.':
    '数据由 ChatGPT 提供。共享额度池和功能额度会单独列出；缺失数据表示 ChatGPT 未提供。',
  'Processed tokens · est.': '已处理 Token · 估算',
  'Peak daily tokens': '单日 Token 峰值',
  'Active days': '活跃天数',
  'Not reported by ChatGPT': 'ChatGPT 未提供',
  'Shared usage pool': '共享用量池',
  'Feature quota': '功能额度',
  'Refresh needed': '需要刷新',
  'Not reported': '未提供',
  Weekly: '每周',
  'Reset not reported': '未提供重置时间',
  'ChatGPT has not reported per-model message balances. Shared usage and feature quotas do not establish a model-specific balance.':
    'ChatGPT 尚未提供各模型的消息余额。共享用量和功能额度不能用于推断某个模型的独立余额。',
  'Estimated equivalent · USD': '估算等值成本 · USD',
  'Recorded model attribution; missing history assumes GPT-5.6 High. Unchanged recordings reuse saved totals.':
    '按已记录的模型归属统计；缺失历史按 GPT-5.6 High 估算。未变化的记录会复用已保存的汇总值。',
  'USD / 1M cached input · editable official baseline, checked 7 September 2026':
    'USD / 百万缓存输入 Token · 可编辑官方基准，核对于 2026 年 9 月 7 日',
  'USD / 1M cached input · enter a verified comparison rate': 'USD / 百万缓存输入 Token · 请输入已核实的对比单价',
  'Unknown rate': '未知单价',
  'Final frontend context': '最终前端上下文',
  'Recorded model / effort': '记录的模型 / 推理强度',
  'Estimated tokens': '估算 Token',
  'Estimated equivalent': '估算等值成本',
  'effort unknown': '推理强度未知',
  assumed: '估算',
  'Rate unknown': '单价未知',
  Day: '日期',
  'No recorded tool calls yet.': '尚无已记录的工具调用。',
  'Deep research': '深度研究',
  'File uploads': '文件上传',
  'Pasted text files': '粘贴文本文件',
  'Image generation': '图像生成',
  'Choose what ChatGPT can access and keep your connection healthy.': '管理 ChatGPT 可访问的内容，并查看连接状态。',
  'ChatGPT ran a tool': 'ChatGPT 工具调用',
  'Local server': '本地服务器',
  'Poll errors': '轮询错误',
  'Tunnel → this app': '隧道 → 本应用',
  'Tunnel uptime': '隧道运行时长',
  'Tunnel client': '隧道客户端',
  'starting…': '正在启动…',
  'checking…': '正在检查…',
  'never — check Developer mode': '从未调用 — 请检查开发者模式',
  'Connect your workspace to ChatGPT.': '将此工作区连接到 ChatGPT。',
  'Before you start: choose “Allow all actions”': '开始前：选择“允许所有操作”',
  'In ChatGPT, open Settings → Plugins (or Apps), select this plugin, and set its action permissions to':
    '在 ChatGPT 中打开“设置 → 插件（或应用）”，选择此插件，并将操作权限设置为',
  'Allow all actions': '允许所有操作',
  '. Repeat for the Desktop plugin if you added it.': '。如果添加了 Desktop 插件，也请重复此操作。',
  'This lets ChatGPT use the plugin without asking for each action. Otherwise, approval prompts can pause Goal, Loop and agent tasks. Your folder and tool permissions in this app still apply.':
    '这样 ChatGPT 使用插件时无需逐次确认操作。否则，审批提示可能会中断目标、循环和代理任务；本应用中的文件夹与工具权限仍然有效。',
  'What would you like to build?': '你想构建什么？',
  'Fine-tune your workspace and the way your agents work.': '调整工作区，以及代理的工作方式。',
  'Search settings': '搜索设置',
  'Search settings…': '搜索设置…',
  'No settings match your search.': '没有匹配的设置。',
  'Continuation sources': '续写来源',
  'Goal response source': '目标响应来源',
  'API is the most reliable. Offline uses completion markers and 200 prepared messages.':
    'API 最可靠；离线模式使用完成标记和预生成消息。',
  'API key · Most reliable': 'API 密钥 · 最可靠',
  'Separate ChatGPT chat': '独立 ChatGPT 会话',
  'Offline · No API cost': '离线 · 无 API 成本',
  'Loop response source': '循环响应来源',
  'Loop keeps going until you switch it off.': '循环会持续运行，直到你手动关闭。',
  'Goal, Loop and Plan model': '目标、循环与计划模型',
  'Model for ChatGPT-generated messages and plans. Select GPT-5.6 and High below for planning.':
    '用于 ChatGPT 生成消息和计划的模型。规划任务建议在下方选择 GPT-5.6 和 High。',
  'Goal, Loop and Plan reasoning': '目标、循环与计划推理强度',
  'Used with the ChatGPT model above; independent from API reasoning.': '与上方 ChatGPT 模型配合使用；独立于 API 推理设置。',
  'Include tool details in Goal and handoffs': '在目标和交接中包含工具详情',
  'Goal receives recorded tool arguments and results. Handoff briefs retain tool details.':
    '目标会读取已记录的工具参数和结果；交接摘要会保留工具详情。',
  'Keep the turn open': '保持当前轮次',
  'Plan generation': '计划生成',
  'Create staged tasks. ChatGPT uses the Goal, Loop and Plan model above; API uses the model and reasoning in API provider settings.':
    '将任务拆分为多个阶段。ChatGPT 使用上方的目标、循环与计划模型；API 使用“API 提供商”中的模型和推理设置。',
  'API provider': 'API 提供商',
  'Session finish': 'Session Finish',
  'Ask Astra to keep the turn open for your next instruction. With Automatic plugin refresh enabled, tool changes refresh the connector after 20 seconds.':
    '让 Astra 保持当前轮次以等待你的下一条指令。开启自动插件刷新后，工具变更会在 20 秒后刷新连接器。',
  'When ChatGPT is wrapping up': 'ChatGPT 即将结束回答时',
  'Automatic follow-ups use your Loop instructions and selected Loop source.': '自动跟进会使用你的循环指令和所选循环来源。',
  'Notify me · Write or Generate Goal': '通知我 · 编写或生成目标',
  'Generate and inject Goal': '生成并注入目标',
  'Requested notice': '提前提醒',
  'A request to the model, not a guaranteed countdown.': '这是向模型提出的请求，并非精确倒计时。',
  '3 minutes': '3 分钟',
  '5 minutes': '5 分钟',
  'Connector instructions': '连接器指令',
  'Your own instructions': '自定义指令',
  'e.g. Always run the test suite before saying a change works.': '例如：确认修改有效前，始终先运行测试套件。',
  'Added to the end of what each connector tells ChatGPT about itself, marked as yours. Kept across app updates. Leave empty for none.':
    '附加到每个连接器提供给 ChatGPT 的说明末尾，并标记为你的指令。应用更新后仍会保留；留空表示不添加。',
  'ChatGPT reads connector instructions once, when it loads the tools, so a change reaches an existing conversation only after the connector is loaded again.':
    'ChatGPT 只会在加载工具时读取一次连接器指令，因此修改后需要重新加载连接器，现有会话才能获取新指令。',
  'ChatGPT models': 'ChatGPT 模型',
  'Available ChatGPT models': '可用的 ChatGPT 模型',
  'Read model choices from your account.': '从你的账号读取可选模型。',
  'Default sub-agent model': '默认子代理模型',
  'Confirmed in ChatGPT before a worker starts.': '工作器启动前会在 ChatGPT 中确认。',
  'Default sub-agent reasoning': '默认子代理推理强度',
  'Selected independently from the model.': '与模型独立选择。',
  'No observed choices': '尚未发现可选项',
  'Browser & history': '浏览器与历史记录',
  'ChatGPT browser': 'ChatGPT 浏览器',
  "Used when the app launches a browser. Install the companion and sign in to ChatGPT in this browser's active profile. Already connected tabs stay in their browser.":
    '应用需要启动浏览器时使用。请安装配套扩展，并在该浏览器当前配置文件中登录 ChatGPT；已连接的标签页会继续留在原浏览器中。',
  'Background chats': '后台会话',
  'Keep app-created ChatGPT tabs in the background.': '让应用创建的 ChatGPT 标签页保持在后台。',
  'Automatic plugin refresh': '自动刷新插件',
  'Let the companion refresh changed connector tools in ChatGPT. Off by default; manual refresh remains available in ChatGPT.':
    '允许配套扩展在 ChatGPT 中刷新发生变化的连接器工具。默认关闭；仍可在 ChatGPT 中手动刷新。',
  'Browser only': '仅浏览器模式',
  'Do not open tabs for automatic plugin refresh or chat recovery. Explicit new chats, workers and Reload models still work.':
    '自动刷新插件或恢复会话时不主动打开标签页；手动新建会话、工作器和“重新加载模型”仍可使用。',
  'Idle app-created tabs close after two minutes. Sleeping worker tabs can close earlier when the worker limit is exceeded. Active turns and unsent drafts stay open.':
    '应用创建的空闲标签页会在两分钟后关闭；超过工作器上限时，休眠工作器标签页可能更早关闭。活跃轮次和未发送草稿不会关闭。',
  'Overwrite ChatGPT tool rows': '覆盖 ChatGPT 工具记录行',
  'Show recorded local activity in the ChatGPT page.': '在 ChatGPT 页面显示本地记录的活动。',
  'Show durations in ChatGPT': '在 ChatGPT 中显示耗时',
  'Uses the same preference as the extension popup.': '与扩展弹窗使用相同设置。',
  'Browser preferences': '浏览器偏好设置',
  "Refresh to read the browser's current preferences.": '点击刷新以读取浏览器当前偏好设置。',
  'Refresh browser preferences': '刷新浏览器偏好设置',
  'Waiting for the extension to confirm…': '正在等待扩展确认…',
  'Confirmed by the browser extension.': '浏览器扩展已确认。',
  'Unable to reach the extension. Connect it and refresh.': '无法连接浏览器扩展，请先连接后再刷新。',
  Provider: '提供商',
  'OpenRouter, or your own OpenAI-compatible endpoint (Ollama, vLLM, LM Studio, a gateway) for the API response source.':
    'API 响应来源可使用 OpenRouter，或你自己的 OpenAI 兼容端点（Ollama、vLLM、LM Studio、网关等）。',
  'Custom endpoint': '自定义端点',
  'Endpoint base URL': '端点基础 URL',
  'https, or http on localhost.': '支持 https，localhost 可使用 http。',
  'are called under it.': '会在该地址下调用。',
  "Your endpoint's own model id, typed exactly as it serves it.": '请输入端点实际提供的模型 ID，需完全一致。',
  'Endpoint API key (optional)': '端点 API 密钥（可选）',
  'leave empty for a keyless local server': '无密钥的本地服务器请留空',
  'Continuation prompts': '续写提示词',
  'Reads the goal from your messages and stops when it is complete.': '从你的消息中读取目标，并在目标完成后停止。',
  'Uses the objective saved in the chat controls. Stops when every requirement is met.': '使用会话控制中保存的目标，满足全部要求后停止。',
  'Writes the next instruction after each answer, until you turn Loop off.': '每次回答后生成下一条指令，直到你关闭循环。',
  'Workers & recovery': '工作器与恢复',
  'Restore missing or unresponsive work chats. Goal and Loop chats recover automatically.': '恢复缺失或无响应的工作会话；目标和循环会话会自动恢复。',
  'Browse folders': '浏览文件夹',
  'Search files': '搜索文件',
  'Read files': '读取文件',
  'File metadata': '文件元数据',
  'Create files': '创建文件',
  'Edit files': '编辑文件',
  'Move / rename': '移动 / 重命名',
  'Delete files': '删除文件',
  'Run commands': '运行命令',
  'Save ChatGPT files': '保存 ChatGPT 文件',
  'See the screen': '查看屏幕',
  'Control mouse and keyboard': '控制鼠标和键盘',
  'Read clipboard': '读取剪贴板',
  'Write clipboard': '写入剪贴板',
  'List what is inside an approved folder.': '列出已批准文件夹中的内容。',
  'Find files by name or glob, and text inside them.': '按名称或 glob 查找文件，并搜索文件内文本。',
  'Read text in ranges, and open local images into vision.': '按范围读取文本，并将本地图像打开供视觉模型查看。',
  'Size, dates and line count, without the contents.': '查看大小、日期和行数，不读取文件内容。',
  'Add new files, and the folders they need.': '创建新文件及其所需文件夹。',
  'Exact edits, applied atomically across files.': '执行精确修改，并跨文件原子应用。',
  'Move or rename, both ends inside approved folders.': '移动或重命名；源和目标都必须位于已批准文件夹内。',
  'Permanent — there is no Recycle Bin.': '永久删除 — 不会进入回收站。',
  'Run anything as you. NOT limited to approved folders.': '以你的身份运行任意命令；不受已批准文件夹范围限制。',
  'Save images and files ChatGPT generates into an approved folder.': '将 ChatGPT 生成的图像和文件保存到已批准文件夹。',
  'Screenshots, open windows, and the controls on them.': '获取屏幕截图、打开的窗口及其中的控件。',
  'Moves the pointer, clicks, types and presses keys, as you.': '以你的身份移动指针、点击、输入和按键。',
  'Read the current clipboard text.': '读取当前剪贴板文本。',
  'Replace the clipboard without focus or keystrokes.': '无需切换焦点或模拟按键即可替换剪贴板内容。',
  'Record this chat locally, and expose the session tool in ChatGPT': '在本地记录此会话，并在 ChatGPT 中公开 session 工具',
  'Expose or hide the sub-agent tools in ChatGPT': '在 ChatGPT 中显示或隐藏子代理工具',
  'List recent recordings or find past and concurrent work by text.': '列出最近记录，或通过文本查找过去及并行进行的工作。',
  'Read one explicit recording, continue it, or expand one short T… tool reference.': '读取指定记录、继续读取，或展开一个简短的 T… 工具引用。',
  'Open worker ChatGPT conversations for parts of the task, on one shared context.': '为任务的不同部分打开工作器 ChatGPT 会话，并共享同一上下文。',
  'Steer one worker or several at once, or report back to prime.': '指导一个或多个工作器，或向主代理汇报。',
  'See every worker, and collect messages not yet delivered on a tool result.': '查看所有工作器，并收集尚未随工具结果送达的消息。',
  'Hand the worker result back to prime and close that slot.': '将工作器结果交回主代理，并释放该工作器槽位。',
  'off in read-only mode': '只读模式下已关闭',
  'What should this chat achieve?': '这个会话要完成什么？',
  'What should each continuation focus on?': '每次续写应重点关注什么？',
  'Ask anything…': '输入任何问题…',
  'Message ChatGPT': '给 ChatGPT 发消息',
  'Add attachments': '添加附件',
  'Add photos & files': '添加图片和文件',
  'Share a folder': '共享文件夹',
  'Chat options': '会话选项',
  'Chat mode': '会话模式',
  Off: '关闭',
  'Chat automation': '会话自动化',
  "This chat's goal": '此会话的目标',
  'Save task': '保存任务',
  'Goal behavior': '目标行为',
  'Goal · stop when complete': '目标 · 完成后停止',
  'Loop · keep going': '循环 · 持续运行',
  'Create plan': '创建计划',
  'Cancel plan': '取消计划',
  'Queue at Session finish': '在 Session Finish 时排队',
  'Compact & resume': '压缩并续聊',
  'Cancel compaction': '取消压缩',
  'Estimated session context': '估算的会话上下文',
  'Session context · estimated': '会话上下文 · 估算',
  'Auto-compaction off for Pro': 'Pro 已关闭自动压缩',
  'Auto-compaction off': '自动压缩已关闭',
  'Choose a level': '选择档位',
  'Observed models': '已发现模型',
  'Reload ChatGPT models': '重新加载 ChatGPT 模型',
  'Thinking effort': '思考强度',
  'ChatGPT model': 'ChatGPT 模型',
  'Reasoning effort': '推理强度',
  'Generate Goal': '生成目标',
  'Message delivery': '消息投递方式',
  'Inject now': '立即注入',
  'After this turn': '当前轮次结束后',
  Send: '发送',
  'Send message': '发送消息',
  'Stop requested': '已请求停止',
  'Stop turn': '停止当前轮次',
  'Cancel delivery': '取消投递',
  'Send first stage': '发送第一阶段',
  'Pursuing goal': '正在执行目标',
  'Pause automation': '暂停自动化',
  'Edit task': '编辑任务',
  'Describe the task to turn into a plan…': '描述任务，以便生成计划…',
  'Creating plan…': '正在创建计划…',
  'Plan cancelled': '计划已取消',
  'Preparing plan…': '正在准备计划…',
  'Plan ready': '计划已就绪',
  'Plan failed': '计划生成失败',
  'Writing plan…': '正在编写计划…',
  'The planner response could not be read.': '无法解析规划器返回的内容。',
  'Send again to retry, or cancel the plan.': '请再次发送以重试，或取消该计划。',
  'Your draft changed; generate a plan from the updated task.': '草稿已发生变化，请根据更新后的任务重新生成计划。',
  'Enter text or delete this stage.': '请输入内容，或删除此阶段。',
  'Saving…': '正在保存…',
  Saved: '已保存',
  'Loop instructions': '循环指令',
  'This sub-agent is managed by its prime.': '此子代理由主代理管理。',
  'This chat is blocked.': '此会话已被阻止。',
  'Compaction is running in ChatGPT.': 'ChatGPT 正在执行上下文压缩。',
  'Image': '图片',
  'File': '文件',
  'Delete this recorded session': '删除此会话记录',
  'Open this chat in Chrome': '在 Chrome 中打开此会话',
  'Sub-agent history': '子代理历史',
  'Unavailable project': '项目不可用',
  'New chat in this project': '在此项目中新建会话',
  'Show more': '显示更多',
  'Unattributed activity': '未归属活动',
  'Recording is off': '会话记录已关闭',
  'scroll for older history': '向下滚动查看更多历史记录',
  opening: '正在打开',
  active: '活动中',
  'no tab': '无标签页',
  sleeping: '休眠中',
  waking: '正在唤醒',
  finished: '已完成',
  failed: '失败',
  blocked: '已阻止',
  'not a chat': '非会话活动',
  resumed: '已恢复',
  prime: '主代理',
  worker: '工作器',
  'Back to sub-agents': '返回子代理列表',
  'Close sub-agents': '关闭子代理面板',
  Active: '活动中',
  History: '历史记录',
  'No active sub-agents': '没有活动中的子代理',
  'No recorded sub-agents': '没有已记录的子代理',
  'Loading conversation…': '正在加载会话…',
  'Conversation unavailable': '会话不可用',
  'Open full chat': '打开完整会话',
  'Toggle sub-agent side panel': '切换子代理侧边栏',
  'Instant': '即时',
  'Extra high': '超高',
  Max: '最高',
  Ultra: '极高',
  Pro: 'Pro',
  'Loading models…': '正在加载模型…',
  'Models unavailable': '模型不可用',
  'Reading your ChatGPT account': '正在读取你的 ChatGPT 账号',
  'Reload models': '重新加载模型',
  'Previous selection unavailable': '之前的选择已不可用',
  'Choose an available model and effort': '请选择可用模型和推理强度',
  'Model and thinking effort': '模型与思考强度',
  'Reading your account’s model choices…': '正在读取你账号中的模型选项…',
  'Connect to ChatGPT to load your models.': '请连接 ChatGPT 以加载模型。',
  'Models unavailable · retry discovery': '模型不可用 · 请重新发现',
  'Reading ChatGPT models': '正在读取 ChatGPT 模型',
  'release date not published': '未公布发布日期',
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

// Never translate recorded/user-authored payloads. Textarea *values* are payloads too, but
// their placeholder/title/aria text is renderer chrome and should still be localised.
const TEXT_SKIP = '#timeline, #handoffBox, .feed, textarea, pre, code, script, style, [data-i18n-ignore]';
const ATTRIBUTE_SKIP = '#timeline, #handoffBox, .feed, pre, code, script, style, [data-i18n-ignore]';

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
  match = /^(\d+) of (\d+) permissions$/.exec(normalized);
  if (match) return `已启用 ${match[1]} / ${match[2]} 项权限`;
  match = /^(\d+) problems?$/.exec(normalized);
  if (match) return `${match[1]} 个问题`;
  match = /^(\d+)\s+total\s+·\s+(\d+)\s+folders?$/.exec(normalized);
  if (match) return `共 ${match[1]} 个 · ${match[2]} 个文件夹`;
  match = /^(\d+) messages? · (\d+) tools?$/.exec(normalized);
  if (match) return `${match[1]} 条消息 · ${match[2]} 次工具调用`;
  match = /^(\d+) retained sessions? · (one|\d+) live now$/.exec(normalized);
  if (match) return `保留 ${match[1]} 个会话 · 当前 ${match[2] === 'one' ? '1' : match[2]} 个活动`;
  match = /^(\d+) retained sessions?$/.exec(normalized);
  if (match) return `保留 ${match[1]} 个会话`;
  match = /^(\d+) of (\d+) retained sessions? shown$/.exec(normalized);
  if (match) return `已显示 ${match[1]} / ${match[2]} 个保留会话`;
  match = /^Recording is off · (.+)$/.exec(normalized);
  if (match) return `会话记录已关闭 · ${translateUiText(match[1] ?? '')}`;
  match = /^(.+) · scroll for older history$/.exec(normalized);
  if (match) return `${translateUiText(match[1] ?? '')} · 向下滚动查看更多历史记录`;
  match = /^(\d+)(s|m|h|d) ago$/.exec(normalized);
  if (match) {
    const unit = { s: '秒', m: '分钟', h: '小时', d: '天' }[match[2] as 's' | 'm' | 'h' | 'd'];
    return `${match[1]} ${unit}前`;
  }
  match = /^ChatGPT reached this app (.+)$/.exec(normalized);
  if (match) return `ChatGPT 已连接到本应用：${translateUiText(match[1] ?? '')}`;
  match = /^Tools: (.+)$/.exec(normalized);
  if (match) return `工具：${match[1]}`;
  match = /^Turn everything in "(.+)" on or off$/.exec(normalized);
  if (match) return `开启或关闭“${translateUiText(match[1] ?? '')}”中的全部权限`;
  match = /^Connected\. Listening on (.+) · last message just now\.$/.exec(normalized);
  if (match) return `已连接。正在监听 ${match[1]} · 刚刚收到消息。`;
  match = /^Connected\. Listening on (.+) · last message (.+)\.$/.exec(normalized);
  if (match) return `已连接。正在监听 ${match[1]} · 最后消息：${translateUiText(match[2] ?? '')}。`;
  match = /^Authorized, but the browser extension is not currently connected\. (.+)$/.exec(normalized);
  if (match) return `浏览器扩展已授权，但当前未连接。${translateUiText(match[1] ?? '')}`;
  match = /^Last seen (.+)\.$/.exec(normalized);
  if (match) return `最后连接：${translateUiText(match[1] ?? '')}。`;
  match = /^Listening on (.+) · no browser is authorized or connected yet\.$/.exec(normalized);
  if (match) return `正在监听 ${match[1]} · 尚无已授权或已连接的浏览器。`;
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
  match = /^(\d+) sub-agents · (\d+) active$/.exec(normalized);
  if (match) return `${match[1]} 个子代理 · ${match[2]} 个活动中`;
  match = /^(Collapse|Expand) (\d+) sub-agents$/.exec(normalized);
  if (match) return `${match[1] === 'Collapse' ? '折叠' : '展开'} ${match[2]} 个子代理`;
  match = /^Sub-agents · (\d+) recorded$/.exec(normalized);
  if (match) return `子代理 · 已记录 ${match[1]} 个`;
  match = /^Sub-agent history · (\d+)$/.exec(normalized);
  if (match) return `子代理历史 · ${match[1]} 个`;
  match = /^Unattributed activity · (\d+)$/.exec(normalized);
  if (match) return `未归属活动 · ${match[1]} 项`;
  match = /^Show more tasks in (.+)$/.exec(normalized);
  if (match) return `显示“${match[1]}”中的更多任务`;
  match = /^Remove (.+)$/.exec(normalized);
  if (match) return `移除 ${match[1]}`;
  match = /^Stage (\d+)$/.exec(normalized);
  if (match) return `阶段 ${match[1]}`;
  match = /^Edit stage (\d+)$/.exec(normalized);
  if (match) return `编辑阶段 ${match[1]}`;
  match = /^Delete stage (\d+)$/.exec(normalized);
  if (match) return `删除阶段 ${match[1]}`;
  match = /^Message in (.+)…$/.exec(normalized);
  if (match) return `在 ${match[1]} 中发送消息…`;
  match = /^(\d+) tokens used$/.exec(normalized);
  if (match) return `已使用 ${match[1]} Token`;
  match = /^(\d+)\/(\d+) tokens · (\d+)% of configured limit$/.exec(normalized);
  if (match) return `${match[1]}/${match[2]} Token · 已使用配置上限的 ${match[3]}%`;
  match = /^Auto-compaction at (\d+) tokens$/.exec(normalized);
  if (match) return `达到 ${match[1]} Token 时自动压缩`;
  match = /^Available in your ChatGPT account · checked (.+)$/.exec(normalized);
  if (match) return `你的 ChatGPT 账号可用 · 检查于 ${match[1]}`;
  match = /^(.+) · not verified$/.exec(normalized);
  if (match) return `${match[1]} · 未验证`;
  match = /^Provider busy · retry (\d*)(?: at (.+))?$/.exec(normalized);
  if (match) return `提供商繁忙 · 第 ${match[1] || '?'} 次重试${match[2] ? `，时间 ${match[2]}` : ''}`;
  match = /^(\d+(?:\.\d+)?)% remaining$/.exec(normalized);
  if (match) return `剩余 ${match[1]}%`;
  match = /^(.+) remaining$/.exec(normalized);
  if (match && /^[\d.,]+$/.test(match[1] ?? '')) return `剩余 ${match[1]}`;
  match = /^(\d+)h window · (.+)$/.exec(normalized);
  if (match) return `${match[1]} 小时窗口 · ${translateUiText(match[2] ?? '')}`;
  match = /^Weekly · (.+)$/.exec(normalized);
  if (match) return `每周 · ${translateUiText(match[1] ?? '')}`;
  match = /^Resets (.+)$/.exec(normalized);
  if (match) return `重置于 ${match[1]}`;
  match = /^(.+) cached-input USD per million tokens$/.exec(normalized);
  if (match) return `${match[1]} 缓存输入单价（USD / 百万 Token）`;
  match = /^(.+): ([\d.,]+) estimated tokens$/.exec(normalized);
  if (match) return `${match[1]}：估算 ${match[2]} Token`;
  match = /^(.+) estimated tokens; (.+) have no comparison rate\. Cached-input equivalent, not a bill\.$/.exec(normalized);
  if (match) return `估算 ${match[1]} Token；其中 ${match[2]} 没有对比单价。按缓存输入等值估算，并非账单。`;
  match = /^(.+) estimated equivalent\. (.+) tokens have no rate\. This is a comparison, not a bill\.$/.exec(normalized);
  if (match) return `估算等值成本 ${match[1]}。其中 ${match[2]} Token 没有单价；仅用于对比，并非账单。`;
  match = /^\+ (.+) unpriced$/.exec(normalized);
  if (match) return `+ ${match[1]} 未计价`;
  match = /^Cached × (.+)$/.exec(normalized);
  if (match) return `缓存输入 × ${match[1]}`;
  match = /^(.+): (\d+(?:\.\d+)?)% remaining$/.exec(normalized);
  if (match) return `${match[1]}：剩余 ${match[2]}%`;
  match = /^Final frontend context × unique tool calls ÷ (.+) × each model’s cached-input rate ÷ 1M × (.+)\.$/.exec(normalized);
  if (match) return `最终前端上下文 × 去重工具调用次数 ÷ ${match[1]} × 各模型缓存输入单价 ÷ 100 万 × ${match[2]}。`;
  match = /^ChatGPT ran a tool (.+) — the whole chain works\.$/.exec(normalized);
  if (match) return `ChatGPT 于${translateUiText(match[1] ?? '')}调用了工具 — 整条链路工作正常。`;
  match = /^ChatGPT connected (.+) but has not run one of its tools yet\.$/.exec(normalized);
  if (match) return `ChatGPT 于${translateUiText(match[1] ?? '')}连接，但尚未调用此连接器的工具。`;
  match = /^ChatGPT ran one of its tools (.+)\.$/.exec(normalized);
  if (match) return `ChatGPT 于${translateUiText(match[1] ?? '')}调用了此连接器的工具。`;
  match = /^verified (.+)$/.exec(normalized);
  if (match) return `已验证 · ${translateUiText(match[1] ?? '')}`;
  match = /^Using (.+)$/.exec(normalized);
  if (match) return `正在使用 ${match[1]}`;
  match = /^Screen Recording: (.+)$/.exec(normalized);
  if (match) return `屏幕录制：${translateUiText(match[1] ?? '')}`;
  match = /^Accessibility: (.+)$/.exec(normalized);
  if (match) return `辅助功能：${translateUiText(match[1] ?? '')}`;
  match = /^(\d+) characters · from (\d+) events \(~([^)]*) tokens\) · (.+)$/.exec(normalized);
  if (match) return `${match[1]} 个字符 · 来自 ${match[2]} 个事件（约 ${match[3]} Token）· ${match[4]}`;
  return value;
}

function localizeTextNode(node: Text): void {
  const parent = node.parentElement;
  if (!parent || parent.closest(TEXT_SKIP)) return;
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
  if (owner?.closest(ATTRIBUTE_SKIP)) return;
  const walker = document.createTreeWalker(root, view.NodeFilter.SHOW_TEXT);
  let node: Node | null;
  while ((node = walker.nextNode())) localizeTextNode(node as Text);
  const elements = [
    ...(owner ? [owner] : []),
    ...Array.from(root.querySelectorAll<HTMLElement>('[title], [aria-label], [placeholder]'))
  ];
  for (const element of elements) {
    if (element.closest(ATTRIBUTE_SKIP)) continue;
    for (const attribute of ['title', 'aria-label', 'placeholder']) {
      const value = element.getAttribute(attribute);
      if (!value) continue;
      const translated = translateUiText(value);
      if (translated !== value) element.setAttribute(attribute, translated);
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
        if (record.target.closest(ATTRIBUTE_SKIP)) continue;
        const attribute = record.attributeName;
        if (attribute && ['title', 'aria-label', 'placeholder'].includes(attribute)) {
          const value = record.target.getAttribute(attribute);
          if (value) {
            const translated = translateUiText(value);
            if (translated !== value) record.target.setAttribute(attribute, translated);
          }
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
