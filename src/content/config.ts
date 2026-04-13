import { defineCollection, z } from 'astro:content';

// Mirrors the Sanity post schema — used for local MDX fallback during dev
const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    planet: z.string().optional(),
    nakshatra: z.string().optional(),
    pillar: z.enum(['MUNDANE_MYSTIC', 'THE_AXIS', 'TIMING_REPORT']),
    isPaid: z.boolean().default(false),
    draft: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
    // Astrological metadata for agent queryability
    degree: z.string().optional(),       // e.g. "8°15'"
    ayanamsa: z.string().default('Lahiri'),
    subLord: z.string().optional(),
    dasha: z.string().optional(),
  }),
});

export const collections = { blog };
