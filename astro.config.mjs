import path from 'path';
import { fileURLToPath } from 'url';

import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';
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
    react(),
    mdx(),
    sitemap(),
    robotsTxt(),
    tailwind(),
    compress(),
  ],
  vite: {
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src'),
      },
    },
  },
});
