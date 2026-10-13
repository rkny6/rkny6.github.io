# la sixième nuit — blog & portfolio

A bilingual (English / 中文) personal blog + portfolio for an independent
developer. Built with [Astro](https://astro.build), TypeScript, MDX and
hand-written CSS. Static-first — the deployed site contains no server-side
code and no JavaScript unless a page needs a little (theme toggle, mobile
menu, project filters, Ask Box).

- Deployed to GitHub Pages at `https://rkny6.github.io/`
- English at `/`, Chinese under `/zh` — the language switch keeps you on the
  same page, and blog posts link directly to their translation.

## Quick start

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # static output in dist/
npm run preview    # serve the production build locally
```

Copy `.env.example` to `.env` if you want to wire up the Ask Box. Everything
works with no environment variables at all.

## Project layout

```
src/
  i18n/            locale config + UI string dictionaries (en, zh)
  data/            site identity, projects, about/now profile — typed, bilingual
  content/blog/    MDX posts, split into en/ and zh/
  lib/             blog helpers, formatting, Ask Box service + providers
  components/      Layout, Header, Footer, list items, AskBox
  views/           one view per page type (shared by both locales)
  pages/           routes — EN at root, ZH mirrored under zh/
  styles/          global.css — the entire design system
server/            optional standalone Ask proxy (zero dependencies)
```

## How the pieces work

### Languages

- `src/i18n/config.ts` defines the locales and the URL helpers
  (`localizedPath`, `switchLangPath`). EN lives at the root; ZH lives under `/zh`.
- `src/i18n/ui.ts` holds every UI label in both languages, typed — adding a
  key for one locale without the other is a compile error.
- Pages are thin route files; the actual markup lives in `src/views/*View.astro`
  and is shared between locales.

### Blog posts

Posts are MDX files. A post and its translation share the **same filename**,
one copy in each folder:

```
src/content/blog/en/my-post.mdx
src/content/blog/zh/my-post.mdx   ← translation of the same post
```

Frontmatter:

```yaml
---
title: 'Post title'
date: 2026-08-19
updated: 2026-09-01         # optional
description: 'One-sentence summary.'
tags: [performance, ci]
cover: '/covers/my-post.png' # optional
draft: false
---
```

| Field | Allowed value | Required / default | Effect |
| --- | --- | --- | --- |
| `title` | String | Required | Title shown in post lists and on the detail page. |
| `date` | Date, preferably `YYYY-MM-DD` | Required | Publication date shown on the page and used by feeds. |
| `updated` | Date, preferably `YYYY-MM-DD` | Optional | Shows an updated date and supplies the modified date for metadata. |
| `description` | String | Required | Summary shown in lists and used for metadata and RSS. |
| `tags` | Array of strings | Optional; defaults to `[]` | Shows tag labels, creates tag pages, sets RSS categories, and helps find related posts. Tags are free-form; use consistent spelling to group posts. |
| `cover` | String | Optional | Accepted by the schema, but not currently rendered by the site. |
| `draft` | `true` or `false` | Optional; defaults to `false` | `true` excludes the post from published lists, tag pages, RSS, and generated detail pages. |

The MDX body after the closing `---` is the article content. Keep the same
filename in `en/` and `zh/` when the files are translations of each other.

To **add a post**: create the file under `en/` (and `zh/` if you have a
translation). Everything else — lists, tags, tag pages, pagination, RSS,
related posts, reading time — is generated at build time. A post without a
translation shows a small note offering the other language's blog index.

### Projects

Projects are MDX files in `src/content/projects/en/` and
`src/content/projects/zh/`. The filename (without `.mdx`) is the project slug;
matching filenames are treated as translations. The body is the project
overview shown on its detail page.

Example frontmatter:

```yaml
---
title: 'Project name'
description: 'One-sentence summary.'
status: in-progress
category: open-source
technologies: [TypeScript, Node.js]
github: https://github.com/example/project
demo: https://example.com
docs: https://example.com/docs
download: https://example.com/download
motivation:
  - Why this project exists.
features:
  - A notable capability.
architecture:
  - How an important part works.
image: '/projects/project.png'
featured: false
relatedPosts: [small-apis-age-well]
draft: false
---
```

| Field | Allowed value | Required / default | Effect |
| --- | --- | --- | --- |
| `title` | String | Required | Project name shown in lists and on the detail page. |
| `description` | String | Required | Summary shown in project lists and metadata. |
| `status` | `active`, `in-progress`, `completed`, `archived`, `concept` | Required | Shows a translated status label. |
| `category` | `open-source`, `products`, `experiments`, `tools` | Required | Shows a category label and controls the project-list filters. |
| `technologies` | Array of strings | Optional; defaults to `[]` | Shows technology labels on the list and detail page. |
| `github`, `demo`, `docs`, `download` | Valid URL strings | Optional | Adds the corresponding external link when provided. `download` appears as “Download” / “下载” in project lists and detail pages. |
| `motivation` | Array of strings | Optional | Adds a Motivation section; each item is rendered as a paragraph. |
| `features` | Array of strings | Optional | Adds a Features section rendered as a bullet list. |
| `architecture` | Array of strings | Optional | Adds an Architecture section; each item is rendered as a paragraph. |
| `image` | String | Optional | Accepted by the schema, but not currently rendered by the site. |
| `featured` | `true` or `false` | Optional; defaults to `false` | `true` makes the project eligible for the home page's featured list (up to three projects). |
| `relatedPosts` | Array of blog slugs, without `.mdx` | Optional; defaults to `[]` | Shows matching, published posts in a Related Writing section. |
| `draft` | `true` or `false` | Optional; defaults to `false` | `true` excludes the project from published lists and detail pages. |

Project display order is not a frontmatter field. Edit the locale-specific slug
lists in `src/data/project-order.ts`; a project missing from its locale's list
causes the build to fail with a reminder to add it.

### About / Now

Both read from `src/data/profile.ts` — bilingual arrays for bio, interests,
background, tools, and the Now page's building/reading/learning/listening
lists. Update the `now.updated` date when you change the Now content.

### Theme

Retro "monochrome windows" design system: graph-paper background, hard
bordered windows with `TITLE` bars and `_ □ ×` buttons, all-monospace type,
pure black-on-white. Dark mode is a straight inversion
(`[data-theme='dark']` flips `--paper`/`--ink`/`--shadow`); the toggle
persists to `localStorage` and applies before first paint (no flash).

All colors, spacing, fonts and radii are CSS custom properties at the top of
`src/styles/global.css`. Pages are built from the `Window` component
(`src/components/Window.astro`) — the home page is a main column of windows
plus a sidebar (menu / webring / updates log); every other page is a single
window whose title bar carries the page `h1` (`<Window heading>`). Change
`--paper`, `--ink`, `--shadow` to re-skin the whole site.

### Ask Box

`/ask` posts through `src/lib/askService.ts`, which picks a provider from the
environment:

| `PUBLIC_ASK_API_URL` | Behavior |
| --- | --- |
| empty (default) | Placeholder provider — "demo mode" note in the UI, submissions only logged |
| set | Direct provider — browser POSTs JSON `{ name, email, message, lang, submittedAt }` to that URL |

To **replace the provider**, add a file in `src/lib/ask/` implementing the
`AskProvider` interface and return it from `resolveProvider()`. Nothing in the
UI changes.

Because the site is static, the URL must be publicly callable. If your
provider needs a secret key, deploy the included proxy instead:

```
server/               zero-dependency Node proxy
  ASK_TARGET_URL      real provider endpoint
  ASK_API_KEY         optional bearer token added server-side
  ALLOWED_ORIGINS     comma-separated CORS allow-list
```

Then point `PUBLIC_ASK_API_URL` at the proxy's `/ask` route. Secrets stay on
the proxy; the browser only ever sees the proxy URL.

## Deploying to GitHub Pages

The site is an Astro static build. `astro.config.ts` sets `site` to
`https://rkny6.github.io` with no `base`, so every asset, canonical URL,
sitemap entry and RSS link is served from the root — a GitHub Pages
**user site**.

### 1. Enable GitHub Pages

- Push this repository to GitHub as `rkny6/rkny6.github.io` (the user-site
  repo name is required for the root URL).
- In the repo: **Settings → Pages → Build and deployment → Source**,
  select **GitHub Actions**.
- No branch is deployed directly — the workflow below handles the build.

### 2. Deploy

A workflow at `.github/workflows/deploy.yml` runs on every push to `main`:

1. Checks out the code and sets up Node 20.
2. Runs `npm ci` and `npm run build` (output in `dist/`).
3. Uploads `dist/` as a Pages artifact.
4. Deploys it with `actions/deploy-pages`.

The site is then live at `https://rkny6.github.io/`.

`robots.txt`, `sitemap-index.xml` and `rss.xml` are generated into `dist/`
automatically.

### 3. Ask proxy (optional)

Only if you want live Ask Box submissions with a secret key. GitHub Pages is
static-only, so the proxy must run elsewhere (any Node host). Point
`PUBLIC_ASK_API_URL` at it and set `ALLOWED_ORIGINS` to your Pages origin.

## Notes

- Blog tag pages (`/blog/tag/<tag>`) and pagination (`/blog/page/<n>`) are
  generated as real routes so everything works on a static host.
- Reading time counts CJK characters individually, so Chinese posts get
  sensible estimates.
- Motion respects `prefers-reduced-motion`; the site is keyboard-navigable and
  prints reasonably.
