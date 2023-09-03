import { defineCollection, z } from 'astro:content'

const post = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    heroImage: z.string().optional(),

    category: z.string(),
    tags: z.array(z.string()).optional(),

    canonical: z.string().url().optional(),

    draft: z.boolean().optional(),
    archived: z
      .string()
      .optional()
      .transform((str) => (str ? new Date(str) : undefined)),

    publishedDate: z
      .string()
      .or(z.date())
      .transform((val) => new Date(val)),
    updatedDate: z
      .string()
      .optional()
      .transform((str) => (str ? new Date(str) : undefined))
  })
})

export const collections = { post }
