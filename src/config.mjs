export const SITE = {
  title: 'Lifeofdev',
  description:
    'Lifeofdev is a web development blog where I share my journey as a software engineer. Join me as I document my experiences, insights, and lessons learned while working with Laravel, Vue.js, Node.js, and more.',

  origin: 'https://lifeofdev.com',
  basePathname: '/',
  trailingSlash: true,

  author: 'xqsit94',

  googleAnalyticsId: 'G-4RT0BMTZHD'
}

export const BLOG = {
  disabled: false,
  postsPerPage: 6,

  giscusConfig: {
    repo: 'xqsit/lifeofdev.com',
    repoId: 'R_kgDOJ7uu_g',
    category: 'Announcements',
    categoryId: 'DIC_kwDOJ7uu_s4CX5q_',
    mapping: 'pathname',
    reactionsEnabled: '1',
    emitMetadata: '0',
    inputPosition: 'top',
    lang: 'en',
    loading: 'lazy',
    theme: 'transparent_dark'
  },

  post: {
    permalink: '/%slug%', // Variables: %slug%, %year%, %month%, %day%, %hour%, %minute%, %second%, %category%
    noindex: false,
    disabled: false
  },

  list: {
    pathname: 'blog', // Blog main path, you can change this to "articles" (/articles)
    noindex: false,
    disabled: false
  },

  category: {
    pathname: 'category', // Category main path /category/some-category
    noindex: true,
    disabled: false
  },

  tag: {
    pathname: 'tag', // Tag main path /tag/some-tag
    noindex: true,
    disabled: false
  }
}
