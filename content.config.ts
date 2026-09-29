import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    work: defineCollection({
      type: 'page',
      source: 'work/*.md',
      schema: z.object({
        type: z.string(),
        when: z.string(),
        link: z.string().url().optional(),
        hero: z.string(),
        summary: z.string().optional(),
        tags: z.array(z.string()).default([]),
        featured: z.object({
          show: z.boolean(),
          image: z.string(),
        }),
        order: z.number(),
      }),
    }),
  },
})
