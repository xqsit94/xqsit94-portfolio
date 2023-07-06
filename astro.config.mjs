import path from 'path';
import { fileURLToPath } from 'url';

import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import compress from 'astro-compress';
import partytown from '@astrojs/partytown';

import tailwind from '@astrojs/tailwind';
import { SITE } from './src/config.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
  site: SITE.origin,
  base: SITE.basePathname,
  trailingSlash: SITE.trailingSlash ? 'always' : 'never',
  integrations: [
    partytown({
      config: {
        forward: ['dataLayer.push'],
      },
    }),
    mdx(),
    sitemap(),
    tailwind(),
    compress(),
    vue(),
  ],
  vite: {
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src'),
      },
    },
  },
});
