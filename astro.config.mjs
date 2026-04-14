import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import sanity from '@sanity/astro';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  site: 'https://axis.thelastlineofcode.com',
  output: 'hybrid',
  adapter: vercel({
    isr: {
      // Cache blog pages for 5 minutes, revalidate in background
      expiration: 300,
    },
  }),
  integrations: [
    mdx(),
    sitemap(),
    tailwind(),
    sanity({
      projectId: process.env.SANITY_PROJECT_ID,
      dataset: process.env.SANITY_DATASET ?? 'production',
      useCdn: false, // false for SSR so we always get fresh content
    }),
  ],
});
