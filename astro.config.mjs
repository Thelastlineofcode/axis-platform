import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import sanity from '@sanity/astro';

export default defineConfig({
  site: 'https://axis.thelastlineofcode.com', // update to final domain
  integrations: [
    mdx(),
    sitemap(),
    tailwind(),
    sanity({
      projectId: process.env.SANITY_PROJECT_ID,
      dataset: process.env.SANITY_DATASET ?? 'production',
      useCdn: true,
      // studioBasePath: '/studio', // uncomment to embed studio
    }),
  ],
});
