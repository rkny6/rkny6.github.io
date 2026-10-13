import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { PROJECT_CATEGORIES, PROJECT_STATUSES } from './data/taxonomy';

/**
 * Blog posts live in src/content/blog/{en,zh}/<slug>.mdx.
 * A post with the SAME FILE NAME in both folders is treated as the
 * translated version of the same article.
 */
const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    description: z.string(),
    tags: z.array(z.string()).default([]),
    cover: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

/**
 * Projects live in src/content/projects/{en,zh}/<slug>.mdx, same twin-file
 * scheme as the blog. Frontmatter carries the structured fields; the body
 * is the overview prose rendered on the detail page.
 */
const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    /** One-sentence summary for lists and meta descriptions. */
    description: z.string(),
    /** Optional "why" / features / architecture bullet sections. */
    motivation: z.array(z.string()).optional(),
    features: z.array(z.string()).optional(),
    architecture: z.array(z.string()).optional(),
    status: z.enum(PROJECT_STATUSES),
    category: z.enum(PROJECT_CATEGORIES),
    technologies: z.array(z.string()).default([]),
    github: z.string().url().optional(),
    demo: z.string().url().optional(),
    docs: z.string().url().optional(),
    download: z.string().url().optional(),
    image: z.string().optional(),
    featured: z.boolean().default(false),
    /** Blog post slugs to show under "related writing". */
    relatedPosts: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog, projects };
