import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    order: z.number(),
    period: z.string(),
    role: z.string(),
    summary: z.string(),
    impact: z.string(),
    tags: z.array(z.string()),
    image: z.string().optional(),
    logo: z.string().optional(),
    logoAlt: z.string().optional(),
    logoTheme: z.enum(['light', 'dark']).default('light'),
    featured: z.boolean().default(false),
  }),
});

const talks = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/talks' }),
  schema: z.object({
    title: z.string(),
    order: z.number(),
    summary: z.string(),
    topic: z.enum(['AI', 'Leadership', 'Engineering craft']),
    appearances: z.array(z.object({ event: z.string(), year: z.number().optional() })),
    recording: z.url().optional(),
    showLinks: z.boolean().default(true),
    atlassian: z.boolean().default(false),
    recordingLabel: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { projects, talks };
