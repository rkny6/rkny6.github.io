import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// GitHub Pages user site. The repository is `rkny6/rkny6.github.io`, so the
// site is served from the root `https://rkny6.github.io/` with no sub-path.
// `site` is the Pages root; `base` is left at the default `/`.
const SITE_URL = 'https://rkny6.github.io';

export default defineConfig({
  site: SITE_URL,
  output: 'static',
  trailingSlash: 'never',
  integrations: [mdx(), sitemap()],
  build: {
    inlineStylesheets: 'auto',
  },
});
