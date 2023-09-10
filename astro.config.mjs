import { defineConfig } from 'astro/config'
import path from 'path'
import { fileURLToPath } from 'url'
import tailwind from '@astrojs/tailwind'
import react from '@astrojs/react'
import partytown from '@astrojs/partytown'
import { SITE } from './src/config.mjs'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import robotsTxt from 'astro-robots-txt'
import icon from 'astro-icon'
import rehypePrettyCode from 'rehype-pretty-code';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://astro.build/config
export default defineConfig({
  site: SITE.origin,
  base: SITE.basePathname,
  trailingSlash: SITE.trailingSlash ? 'always' : 'never',
  integrations: [partytown({
    config: {
      forward: ['dataLayer.push']
    }
  }), react(), mdx(), sitemap(), robotsTxt(), tailwind(), icon({
    include: {
      tabler: ['chevron-left', 'chevron-right'],
      devicon: ['*'],
    },
  })],
  markdown: {
    syntaxHighlight: false,
    rehypePlugins: [
      [rehypePrettyCode, { theme: 'css-variables' }]
    ],
  },
  vite: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    }
  }
});
