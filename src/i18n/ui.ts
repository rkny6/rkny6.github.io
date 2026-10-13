import type { Locale } from './config';

/**
 * All UI text for the site, keyed by locale.
 *
 * To add a string: add the key under `en`, then add the same key under `zh`.
 * TypeScript will error if a translation is missing.
 */
export const ui = {
  en: {
    // -- Navigation ----------------------------------------------------------
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.blog': 'Blog',
    'nav.now': 'Now',
    'nav.contact': 'Contact',
    'nav.ask': 'Ask',
    'nav.menu': 'Menu',
    'nav.close': 'Close menu',
    'nav.language': 'Switch language',
    'nav.theme': 'Switch theme',
    'nav.skip': 'Skip to content',

    // -- Site ----------------------------------------------------------------
    'site.name': 'la sixième nuit',
    'site.description':
      'la sixième nuit — the personal site of rkny6, independent developer. Writing, open-source projects and experiments.',

    // -- Page metadata (title suffix is " — {site name}") --------------------
    'meta.home': 'Home',
    'meta.about': 'About',
    'meta.projects': 'Projects',
    'meta.blog': 'Writing',
    'meta.now': 'Now',
    'meta.contact': 'Contact',
    'meta.ask': 'Ask box',
    'meta.projects.desc':
      'Open-source libraries, small products, experiments and tools I have built.',
    'meta.blog.desc': 'Notes on software, architecture and building things alone.',
    'meta.about.desc': 'Who I am, what I care about and the tools I use.',
    'meta.now.desc': 'A snapshot of what I am focused on these days.',
    'meta.contact.desc': 'Ways to reach me, and the ask box.',
    'meta.ask.desc': 'Leave a question or a message.',

    // -- Home ----------------------------------------------------------------
    'home.hi': 'Hi, I’m',
    'home.intro':
      'I like building small, durable software, and I write about the day-to-day of independent development.',
    'home.featured': 'Selected projects',
    'home.recent': 'Recent writing',
    'home.now': 'Currently',
    'home.viewProjects': 'All projects',
    'home.viewPosts': 'All writing',
    'home.askTitle': 'Ask box',
    'home.updates': 'Updates Log',
    'home.ringNote': 'This webring has exactly one member. Enjoy the tour.',
    'home.askTeaser': 'A small inbox for questions about my work, code, or anything else.',
    'home.askCta': 'Ask me something',

    // -- About ---------------------------------------------------------------
    'about.title': 'About',
    'about.bio': 'Biography',
    'about.interests': 'Interests',
    'about.background': 'Background',
    'about.focus': 'Current focus',
    'about.tools': 'Tools & technologies',
    'about.elsewhere': 'Elsewhere',

    // -- Projects ------------------------------------------------------------
    'projects.title': 'Projects',
    'projects.intro':
      'Things I have built, broken and rebuilt — open source, products, experiments and tools.',
    'projects.filter.all': 'All',
    'category.open-source': 'Open Source',
    'category.products': 'Products',
    'category.experiments': 'Experiments',
    'category.tools': 'Tools',
    'status.active': 'Active',
    'status.in-progress': 'In progress',
    'status.completed': 'Completed',
    'status.archived': 'Archived',
    'status.concept': 'Concept',
    'projects.source': 'Source',
    'projects.demo': 'Live demo',
    'projects.docs': 'Docs',
    'projects.download': 'Download',
    'projects.back': 'Back to projects',
    'projects.overview': 'Overview',
    'projects.motivation': 'Why this exists',
    'projects.features': 'Features',
    'projects.architecture': 'Architecture notes',
    'projects.related': 'Related writing',
    'projects.status': 'Status',
    'projects.category': 'Category',
    'projects.tech': 'Built with',
    'projects.empty': 'Nothing in this category yet — check back soon.',

    // -- Blog ----------------------------------------------------------------
    'blog.title': 'Writing',
    'blog.intro': 'Notes on software, architecture and building things alone.',
    'blog.readTime': '{n} min read',
    'blog.tags': 'Tags',
    'blog.allTags': 'All',
    'blog.tagged': 'Posts tagged',
    'blog.none': 'No posts here yet.',
    'blog.prev': 'Previous',
    'blog.next': 'Next',
    'blog.page': 'Page {n}',
    'blog.published': 'Published',
    'blog.updated': 'Updated',
    'blog.back': 'Back to writing',
    'blog.noTranslation': 'This post is only available in {lang}.',

    // -- Now -----------------------------------------------------------------
    'now.title': 'Now',
    'now.intro':
      'What I am focused on these days. This is a /now page — a snapshot, not a résumé.',
    'now.building': 'Building',
    'now.reading': 'Reading',
    'now.learning': 'Learning',
    'now.listening': 'Listening',
    'now.updated': 'Last updated',

    // -- Contact -------------------------------------------------------------
    'contact.title': 'Contact',
    'contact.intro':
      'The fastest way to reach me is email. I read everything, and I answer most of it.',
    'contact.email': 'Email',
    'contact.social': 'Elsewhere',
    'contact.askTitle': 'Ask box',
    'contact.askTeaser': 'Too small for an email? Leave a short question in the ask box.',
    'contact.askCta': 'Open the ask box',

    // -- Support -------------------------------------------------------------
    'support.title': 'Support my work',
    'support.intro':
      'If my projects or writing have been useful, you can buy me a coffee. It keeps the late nights going.',

    // -- Ask box -------------------------------------------------------------
    'ask.title': 'Ask box',
    'ask.intro':
      'A small, low-friction way to send me a question — about a project, a post, or anything else. No account, no thread, no pressure.',
    'ask.name': 'Name',
    'ask.namePlaceholder': 'optional',
    'ask.email': 'Email',
    'ask.emailPlaceholder': 'optional — if you want a reply',
    'ask.message': 'Your question',
    'ask.messagePlaceholder': 'What would you like to ask?',
    'ask.submit': 'Send',
    'ask.sending': 'Sending…',
    'ask.success': 'Thanks — your question landed. I answer when I can.',
    'ask.error': 'Something went wrong on the way. Try again, or email me instead.',
    'ask.disabled':
      'The ask box is not accepting questions right now. Email me instead — it works fine.',
    'ask.privacy': 'Questions are kept private and never shared or sold.',
    'ask.placeholderNote':
      'Demo mode: no provider is configured yet, so submissions are accepted but not stored.',

    // -- Footer --------------------------------------------------------------
    'footer.built': 'Built with Astro. Static, no trackers.',
    'footer.source': 'Elsewhere',
  },

  zh: {
    // -- 导航 ----------------------------------------------------------------
    'nav.home': '首页',
    'nav.about': '关于',
    'nav.projects': '项目',
    'nav.blog': '文章',
    'nav.now': '现状',
    'nav.contact': '联系',
    'nav.ask': '提问',
    'nav.menu': '菜单',
    'nav.close': '关闭菜单',
    'nav.language': '切换语言',
    'nav.theme': '切换主题',
    'nav.skip': '跳到正文',

    // -- 站点 ----------------------------------------------------------------
    'site.name': 'la sixième nuit',
    'site.description': 'la sixième nuit —— rkny6 的个人网站，独立开发者。写作、开源项目与实验。',

    // -- 页面元数据 ----------------------------------------------------------
    'meta.home': '首页',
    'meta.about': '关于',
    'meta.projects': '项目',
    'meta.blog': '文章',
    'meta.now': '现状',
    'meta.contact': '联系',
    'meta.ask': '提问箱',
    'meta.projects.desc': '我写的开源库、小产品、实验和工具。',
    'meta.blog.desc': '关于软件、架构与独立开发的笔记。',
    'meta.about.desc': '我是谁、关心什么、用什么工具。',
    'meta.now.desc': '最近一段时间我在做什么。',
    'meta.contact.desc': '联系我的方式，以及提问箱。',
    'meta.ask.desc': '留下一个问题或消息。',

    // -- 首页 ----------------------------------------------------------------
    'home.hi': '你好，我是',
    'home.intro':
      '我喜欢做小而耐用的软件，也会在这里记录独立开发的日常。',
    'home.featured': '精选项目',
    'home.recent': '最近文章',
    'home.now': '正在做',
    'home.viewProjects': '全部项目',
    'home.viewPosts': '全部文章',
    'home.askTitle': '提问箱',
    'home.updates': '更新日志',
    'home.ringNote': '这个 webring 只有我一个成员。随便逛。',
    'home.askTeaser': '一个小小的收件箱 —— 关于我的作品、代码，或者任何事。',
    'home.askCta': '问我点什么',

    // -- 关于 ----------------------------------------------------------------
    'about.title': '关于',
    'about.bio': '简介',
    'about.interests': '兴趣',
    'about.background': '经历',
    'about.focus': '当前重心',
    'about.tools': '工具与技术',
    'about.elsewhere': '出没于',

    // -- 项目 ----------------------------------------------------------------
    'projects.title': '项目',
    'projects.intro': '我做过的、搞坏过的、又重做过的一切 —— 开源、产品、实验和工具。',
    'projects.filter.all': '全部',
    'category.open-source': '开源',
    'category.products': '产品',
    'category.experiments': '实验',
    'category.tools': '工具',
    'status.active': '活跃',
    'status.in-progress': '进行中',
    'status.completed': '已完成',
    'status.archived': '已归档',
    'status.concept': '概念',
    'projects.source': '源码',
    'projects.demo': '在线演示',
    'projects.docs': '文档',
    'projects.download': '下载',
    'projects.back': '返回项目列表',
    'projects.overview': '概览',
    'projects.motivation': '为什么做这个',
    'projects.features': '特性',
    'projects.architecture': '架构笔记',
    'projects.related': '相关文章',
    'projects.status': '状态',
    'projects.category': '分类',
    'projects.tech': '技术栈',
    'projects.empty': '这个分类暂时还没有内容 —— 稍后再来。',

    // -- 文章 ----------------------------------------------------------------
    'blog.title': '文章',
    'blog.intro': '关于软件、架构与独立开发的笔记。',
    'blog.readTime': '约 {n} 分钟',
    'blog.tags': '标签',
    'blog.allTags': '全部',
    'blog.tagged': '标签',
    'blog.none': '这里还没有文章。',
    'blog.prev': '上一页',
    'blog.next': '下一页',
    'blog.page': '第 {n} 页',
    'blog.published': '发布于',
    'blog.updated': '更新于',
    'blog.back': '返回文章列表',
    'blog.noTranslation': '这篇文章只有{lang}版本。',

    // -- 现状 ----------------------------------------------------------------
    'now.title': '现状',
    'now.intro': '最近一段时间我在做什么。这是一个 /now 页面 —— 是快照，不是简历。',
    'now.building': '构建',
    'now.reading': '阅读',
    'now.learning': '学习',
    'now.listening': '聆听',
    'now.updated': '最后更新',

    // -- 联系 ----------------------------------------------------------------
    'contact.title': '联系',
    'contact.intro': '找我最快的方式是邮件。我都会读，大多数也会回。',
    'contact.email': '邮件',
    'contact.social': '出没于',
    'contact.askTitle': '提问箱',
    'contact.askTeaser': '事情小到不值得写封邮件？丢进提问箱就好。',
    'contact.askCta': '打开提问箱',

    // -- 支持 ----------------------------------------------------------------
    'support.title': '支持我的作品',
    'support.intro': '如果我的项目或文章对你有帮助，或者如果你单纯喜欢我，可以请我喝一杯奶茶🧋咩。',

    // -- 提问箱 --------------------------------------------------------------
    'ask.title': '提问箱',
    'ask.intro': '一个低摩擦的小入口 —— 关于某个项目、某篇文章，或者任何事。不用注册，不会刷屏，没有压力。',
    'ask.name': '名字',
    'ask.namePlaceholder': '可不填',
    'ask.email': '邮箱',
    'ask.emailPlaceholder': '可不填 —— 想要回复的话就留一个',
    'ask.message': '你的问题',
    'ask.messagePlaceholder': '想问点什么？',
    'ask.submit': '发送',
    'ask.sending': '发送中…',
    'ask.success': '收到了 —— 我会尽量回复。',
    'ask.error': '路上出了点问题。再试一次，或者直接给我发邮件。',
    'ask.disabled': '提问箱暂时关闭中。邮件随时欢迎。',
    'ask.privacy': '问题会被私密保存，绝不分享或出售。',
    'ask.placeholderNote': '演示模式：尚未配置服务方，提交会被接受但不会保存。',

    // -- 页脚 ----------------------------------------------------------------
    'footer.built': '使用 Astro 构建。纯静态，无追踪。',
    'footer.source': '别处',
  },
} as const satisfies Record<Locale, Record<string, string>>;

export type UIKey = keyof (typeof ui)['en'];
