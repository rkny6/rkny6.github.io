import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import { site } from '@/data/site';
import { postLang, postSlug } from '@/lib/blog';

/** Site base path (empty on a GitHub Pages user site served from the root). */
const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

export async function GET(context: APIContext) {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  const items = posts
    .filter((p) => postLang(p) === 'en')
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())
    .map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: `${BASE}/blog/${postSlug(post)}`,
      categories: post.data.tags,
    }));

  return rss({
    title: `${site.title} — Writing`,
    description: 'Notes on software, architecture and building things alone.',
    site: context.site!,
    items,
    trailingSlash: false,
  });
}
