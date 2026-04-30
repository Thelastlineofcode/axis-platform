import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';

const site = process.env.PUBLIC_SITE_URL || 'https://axis.yourdomain.com';

export default defineConfig({
  site,
  integrations: [mdx(), tailwind()],
});
