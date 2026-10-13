import type { Localized } from '@/i18n/config';

/**
 * About page content. Written as prose paragraphs per section — edit freely.
 */
export const about = {
  bio: {
    en: [
      "I'm rkny6, an independent developer and former Silicon Valley data-pipeline plumber who spent more time slacking off than working.",
      'Being a freedom-chasing idealist and a complete idiot, I quit my lovely (not) job and now make a living as a professional internet beggar.',
    ],
    zh: [
      '我是 rkny6，独立开发者，前·硅谷划水管道工。',
      '因为是个追求自由的理想主义大傻子，愤然quit，然后过上了赛博要饭的自由生活。',
    ],
  } satisfies Localized<string[]>,

  interests: {
    en: [
      'Catching feelings for AI',
      'Daydreaming',
      'Drawing all sorts of nonsense',
    ],
    zh: ['和AI谈感情', '白日做梦', '画乱七八糟的画'],
  } satisfies Localized<string[]>,

  background: {
    en: [
      '2023 — Independent. Products, open source, and consulting.',
      '2019–2023 — Staff engineer at a developer-platform company. Led the edge rendering effort.',
      '2015–2019 — Backend and infrastructure at two early-stage startups, one of which worked out.',
      'Before that — a computer-science degree and a long detour through freelance web work.',
    ],
    zh: [
      '2023 至今 —— 独立。产品、开源和咨询。',
      '2019–2023 —— 一家开发者平台公司的 Staff 工程师，负责边缘渲染方向。',
      '2015–2019 —— 两家早期创业公司的后端和基础设施，其中一家活下来了。',
      '再之前 —— 一个计算机科学学位，以及自由职业的一段漫长弯路。',
    ],
  } satisfies Localized<string[]>,

  focus: {
    en: [
      'Building the echo empire!! 👑 (Not sure what I’m so fired up about.)',
      'Studying... catching up... sincerely repenting for all the slacking off.',
    ],
    zh: [
      '壮大echo帝国👑！！（不知道在燃什么）',
      '学习……补课……以前划水划多了我严肃忏悔。',
    ],
  } satisfies Localized<string[]>,

  tools: {
    en: [
      'TypeScript / Go / a suspicious amount of shell',
      'Astro, SQLite, Fly.io, Render',
      'Neovim, tmux, Zellij',
      'Rust when the side-project deserves it',
    ],
    zh: [
      'TypeScript / Go / 多到可疑的 shell',
      'Astro、SQLite、Fly.io、Render',
      'Neovim、tmux、Zellij',
      '当副项目配得上时，会上 Rust',
    ],
  } satisfies Localized<string[]>,
};

/**
 * Now page content — update whenever your focus shifts.
 */
export const now = {
  updated: '2026-09-15',

  building: {
    en: [
      'Inkwell — beta with the sync story finished. Public launch planned for this autumn.',
      'Pulse v2 — per-component budgets, not just per-route.',
    ],
    zh: ['Inkwell —— beta 阶段，同步方案已完成。计划秋天正式发布。', 'Pulse v2 —— 预算细到组件级，而不只是路由级。'],
  } satisfies Localized<string[]>,

  reading: {
    en: ['A Philosophy of Software Design (again)', 'The Timeless Way of Building', 'The Design of Everyday Things (reread)'],
    zh: ['《软件设计哲学》（第二遍）', '《建筑模式语言》', '《设计心理学》（重读）'],
  } satisfies Localized<string[]>,

  learning: {
    en: ['Zig — enough to be dangerous, not enough to ship', 'Font design basics with FontForge'],
    zh: ['Zig —— 学到了一半危险的程度，还不足以发布', '用 FontForge 学字体设计入门'],
  } satisfies Localized<string[]>,

  listening: {
    en: ['Ambient and dub techno while working; anything with a bassline while walking.'],
    zh: ['工作时听氛围和 dub techno；走路时听任何有贝斯线的东西。'],
  } satisfies Localized<string[]>,
};
