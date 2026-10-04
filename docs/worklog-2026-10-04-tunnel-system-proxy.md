# 隧道使用系统代理（2026-10-04）

## 原因与修复

Windows 图形界面启动的应用没有代理环境变量。虽然系统代理已经启用，Go
tunnel-client 的控制面仍报告 direct / proxy_source=none，元数据读取和轮询持续超时。
本地 MCP 启动探测和扩展配对正常，不能作为 OpenAI 远端连接成功的证据。

`src/main/tunnel/proxy.ts` 在启动每个 OpenAI 隧道子进程时，通过 Electron
`session.defaultSession.resolveProxy()` 解析实际控制面地址的系统/PAC 路由。已有客户端
代理配置和对应协议的环境变量优先；系统选定的首条路由支持 HTTP、HTTPS 和 SOCKS5。
只修改子进程环境，保留 NO_PROXY，HTTP 回环 MCP 不经过新增的 HTTPS 代理。
代理值不放入 argv，查询失败不记录返回值或原始异常。断开期间返回的旧查询不能启动进程。
没有新增重试、计时器、配置镜像或持久状态；Cloudflare 适配器没有修改。

保留了任务开始时已有的 package-lock.json、renderer/main.ts 和 renderer/index.html 改动。
没有编辑运行中的 session/state 账本、全局代理、DNS、凭据、权限或依赖版本。

## 验证

- 最终相关测试：5 个文件，113 项通过、1 项平台跳过；包含系统代理传递、显式配置优先级、
  HTTP/HTTPS 分开处理、NO_PROXY 保留、DIRECT/不支持的路由、查询失败及 Stop 期间的延迟返回。
- `npm run typecheck`、`npm run build`、`git diff --check` 通过。
- 最终源代码另用隔离的真实 Electron 实例验证系统代理解析成功；HTTP_PROXY 未被设置。
  临时验证代码和结果在忽略的 outputs/tunnel-system-proxy/。
- 正常关停日志确认 accepted-response drain、进程清理和持久化 flush 完成后，重新启动了当前
  开发应用。新进程刻意不继承 HTTP_PROXY、HTTPS_PROXY、ALL_PROXY，两个隧道仍实际使用了
  系统代理。Core、Desktop 的远端成功轮询时间从 0 持续前进；通过联想 Desktop 连接器的
  真实 list_windows 调用成功。未打包、安装或发布版本。
- 全量 `npm run verify` 的隐私、许可与原生源码清单、类型检查阶段通过；测试结果为
  272 个文件通过、3 个失败、5 个跳过，7002 项通过、3 项失败、48 项跳过。下面逐项记录
  失败和复核，不能将这次全量结果称为通过。
- 全量脚本因上述失败没有进入最后的串行检查；独立执行
  `npx vitest run --maxWorkers=1 test/computer.test.ts test/mcp-shutdown.test.ts`：26 项通过。

全量测试启动后，对代理环境变量优先级做了最后一次调整；HTTP/HTTPS 分离用例在该长运行
中失败。与编辑重叠造成的实现缓存不一致是推断，未将该运行作为最终代码的完整验证。
代码固定后上述 5 个相关文件重新运行，113 项全部通过；其中代理/生命周期的 42 项也在
另外两次独立运行中通过。真实 Electron 验证使用最终源代码。

未修改的 windows-keys 测试在全量和独立运行中均失败：它把包含非 ASCII 字符的脚本写成
无 BOM 的 UTF-8，再通过 Windows PowerShell 5 的 -File 执行；当前中文系统产生解析错误。
另有 public-history-privacy 的一个用例超过 30 秒，独立复核该用例 4.5 秒通过。
Windows 键盘脚本的既有编码问题不属于隧道代理改动范围，未修改该文件。

参考：
[Electron resolveProxy](https://www.electronjs.org/docs/latest/api/session#sesresolveproxyurl)、
[固定 tunnel-client 版本的代理配置](https://github.com/openai/tunnel-client/blob/0f870e50a973fa820d4c409000059e181e8d242b/docs/configuration.md)。
