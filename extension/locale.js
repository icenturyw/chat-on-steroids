(() => {
  'use strict';

  const locale = String(chrome.i18n && chrome.i18n.getUILanguage ? chrome.i18n.getUILanguage() : navigator.language || '');
  const simplifiedChinese = /^zh(?:-|$)/i.test(locale) && !/^zh-(?:TW|HK|MO|Hant)(?:-|$)/i.test(locale);
  const messages = {
    'Looking for the app': '正在查找应用',
    'Session capture': '会话捕获',
    'ChatGPT tab': 'ChatGPT 标签页',
    'Recording this chat': '正在记录此会话',
    'Chat ID': '会话 ID',
    'Request ID': '请求 ID',
    'Reaching the app': '正在联系应用',
    'Picked up': '已获取',
    'Sent to app': '已发送到应用',
    'App processed': '应用已处理',
    'Augment ChatGPT': '增强 ChatGPT',
    'Overwrite ChatGPT': '替换 ChatGPT 工具显示',
    Timestamps: '时间戳',
    Advanced: '高级',
    Copy: '复制',
    copied: '已复制',
    'copy failed': '复制失败',
    'Try again': '重试',
    Connect: '连接',
    Disconnect: '断开连接',
    'Chat blocked': '会话已阻止',
    'Save as loop': '保存为循环',
    'Save as goal': '保存为目标',
    'Saving…': '正在保存…',
    'working…': '正在处理…',
    Cancel: '取消',
    Clear: '清除',
    'Turn started': '回合已开始',
    'ChatGPT tool': 'ChatGPT 工具',
    'Goal mode': '目标模式',
    Goal: '目标',
    Loop: '循环',
    Off: '关闭',
    'Auto-compaction': '自动压缩与续聊',
    'Auto-compaction off': '自动压缩已关闭',
    'compact this chat by hand': '手动压缩此会话',
    'threshold set in the app': '阈值已在应用中设置',
    'Goal and Loop off': '目标和循环均已关闭',
    'Goal on': '目标已开启',
    'Goal on — no API key': '目标已开启 — 缺少 API 密钥',
    'Goal on — chasing this chat’s goal': '目标已开启 — 正在推进此会话的目标',
    'Loop on — never stops on its own': '循环已开启 — 不会自行停止',
    'Loop on — no API key': '循环已开启 — 缺少 API 密钥',
    'No API key — Goal and Loop unavailable': '缺少 API 密钥 — 目标和循环不可用',
    'Opening this chat on its goal': '正在按目标启动此会话',
    'Add a goal or a loop to start this chat': '添加目标或循环以启动此会话',
    'Nothing is written here on its own.': '不会在此自动发送任何内容。',
    'the prime writes here': '由主代理在此写入',
    'blocked in the app': '已在应用中阻止',
    'OpenRouter key required': '需要 OpenRouter 密钥',
    'replies for ever': '持续回复，不自行停止',
    'replies until goal reached': '持续回复直到目标达成',
    'no replies written here': '不会在此自动回复',
    'add specific goal': '添加具体目标',
    'add specific loop': '添加具体循环',
    'edit task': '编辑任务',
    'add task': '添加任务',
    'What does this chat have to reach?': '这个会话需要达成什么目标？',
    'Pick Goal or Loop above first — Off writes nothing.': '请先在上方选择“目标”或“循环”——关闭状态不会写入任何内容。',
    'A worker chat is already driven by its prime.': '工作器会话已由其主代理驱动。',
    'This chat is blocked in the app. Release it there to drive it again.': '此会话已在应用中阻止；请先在应用中解除后再继续驱动。',
    'Add an OpenRouter API key in the app first.': '请先在应用中添加 OpenRouter API 密钥。',
    'Compact & resume unavailable': '压缩与续聊不可用',
    'Cancel compaction': '取消压缩',
    'Compact & resume now': '立即压缩并续聊',
    Dismiss: '关闭',
    'Cancel Compact & resume': '取消压缩与续聊'
  };

  function t(value) {
    if (!simplifiedChinese || typeof value !== 'string') return value;
    const normalized = value.replace(/\s+/g, ' ').trim();
    const exact = messages[value] || messages[normalized];
    if (exact) return exact;
    let match = /^from (.+) tokens$/.exec(normalized);
    if (match) return `从 ${match[1]} Token 起`;
    match = /^Auto-compaction on(?:, (.+))?$/.exec(normalized);
    if (match) return match[1] ? `自动压缩已开启，${t(match[1])}` : '自动压缩已开启';
    match = /^Replies as you until this chat’s goal is reached, then stops\. Written with (.+)\.$/.exec(normalized);
    if (match) return `以你的身份回复，直到此会话目标达成后停止。使用 ${match[1]} 生成。`;
    match = /^Replies as you for ever — only this slider ends it\. Written with (.+)\.$/.exec(normalized);
    if (match) return `持续以你的身份回复——只有此滑块能停止它。使用 ${match[1]} 生成。`;
    match = /^Change or clear what this chat has to reach\. It runs as (Goal|Loop)\.$/.exec(normalized);
    if (match) return `修改或清除此会话需要达成的目标。当前按${match[1] === 'Loop' ? '“循环”' : '“目标”'}运行。`;
    match = /^Write what this chat has to reach\. It runs as (Goal|Loop)\.$/.exec(normalized);
    if (match) return `填写此会话需要达成的目标。将按${match[1] === 'Loop' ? '“循环”' : '“目标”'}运行。`;
    match = /^Run by (.+), not by the chat you are reading\.$/.exec(normalized);
    if (match) return `由 ${match[1]} 执行，而不是由你正在查看的会话执行。`;
    match = /^Turn (completed|failed|stopped|cancelled)(.*)$/.exec(normalized);
    if (match) {
      const outcome = { completed: '已完成', failed: '失败', stopped: '已停止', cancelled: '已取消' }[match[1]];
      return `回合${outcome}${match[2] || ''}`;
    }
    match = /^(.+) · (completed|failed|refused|unknown)(?: · (\d+) ms)?$/.exec(normalized);
    if (match) {
      const outcome = { completed: '已完成', failed: '失败', refused: '已拒绝', unknown: '未知' }[match[2]];
      return `${match[1]} · ${outcome}${match[3] ? ` · ${match[3]} 毫秒` : ''}`;
    }
    match = /^(\d+) more changed files$/.exec(normalized);
    if (match) return `另外 ${match[1]} 个已更改文件`;
    return value;
  }

  function translateText(node) {
    const match = /^(\s*)(.*?)(\s*)$/s.exec(node.data || '');
    if (!match) return;
    const translated = t(match[2]);
    if (translated !== match[2]) node.data = `${match[1]}${translated}${match[3]}`;
  }

  function translateAttributes(element) {
    if (!element || !element.getAttribute) return;
    for (const attribute of ['title', 'aria-label', 'placeholder', 'data-clf-tip']) {
      const value = element.getAttribute(attribute);
      if (!value) continue;
      const translated = t(value);
      if (translated !== value) element.setAttribute(attribute, translated);
    }
  }

  function localize(root) {
    if (!simplifiedChinese || !root) return;
    if (root.nodeType === Node.TEXT_NODE) {
      translateText(root);
      return;
    }
    if (root.nodeType === Node.ELEMENT_NODE) translateAttributes(root);
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) translateText(node);
    if (root.querySelectorAll) {
      for (const element of root.querySelectorAll('[title], [aria-label], [placeholder], [data-clf-tip]')) {
        translateAttributes(element);
      }
    }
  }

  function owned(node) {
    const element = node && (node.nodeType === Node.ELEMENT_NODE ? node : node.parentElement);
    return element && element.closest && element.closest('.clf-menu, .clf-composer, .clf-stage, .clf-boot, .clf-blocked');
  }

  globalThis.CLF_I18N = Object.freeze({ locale: simplifiedChinese ? 'zh-CN' : 'en', t, localize });

  if (location.protocol === 'chrome-extension:') {
    const start = () => {
      document.documentElement.lang = simplifiedChinese ? 'zh-CN' : 'en';
      localize(document.body);
      new MutationObserver((records) => {
        for (const record of records) {
          if (record.type === 'characterData') translateText(record.target);
          if (record.type === 'attributes') translateAttributes(record.target);
          for (const node of record.addedNodes) localize(node);
        }
      }).observe(document.body, {
        childList: true,
        subtree: true,
        characterData: true,
        attributes: true,
        attributeFilter: ['title', 'aria-label', 'placeholder', 'data-clf-tip']
      });
    };
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start, { once: true });
    else start();
  } else if (simplifiedChinese) {
    new MutationObserver((records) => {
      for (const record of records) {
        if (record.type === 'characterData' && owned(record.target)) translateText(record.target);
        if (record.type === 'attributes' && owned(record.target)) translateAttributes(record.target);
        for (const node of record.addedNodes) {
          if (owned(node)) localize(node.nodeType === Node.TEXT_NODE ? node.parentElement : node);
        }
      }
    }).observe(document.documentElement, {
      childList: true,
      subtree: true,
      characterData: true,
      attributes: true,
      attributeFilter: ['title', 'aria-label', 'placeholder', 'data-clf-tip']
    });
  }
})();
