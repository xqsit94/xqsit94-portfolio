import { defineCollection, z } from 'astro:content';

const post = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    category: z.string(),
    description: z.string(),
    slug: z.string().optional(),
    // Transform string to Date object
    pubDate: z
      .string()
      .or(z.date())
      .transform((val) => new Date(val)),
    updatedDate: z
      .string()
      .optional()
      .transform((str) => (str ? new Date(str) : undefined)),
    heroImage: z.string().optional(),
    tags: z.array(z.string()).optional(),
    canonical: z.string().url().optional(),
    draft: z.boolean().optional(),
    archived: z
      .string()
      .optional()
      .transform((str) => (str ? new Date(str) : undefined)),
  }),
});

export const collections = { post };
