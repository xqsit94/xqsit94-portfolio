export const SITE = {
  title: 'lifeofdev',
  description:
    'LIFEOFDEV is a web development blog where I share my journey as a software engineer. Join me as I document my experiences, insights, and lessons learned while working with Laravel, Vue.js, Node.js, and more.',

  origin: 'https://lifeofdev.com',
  basePathname: '/',
  trailingSlash: false,

  googleSiteVerificationId: 'google-site-verification-code',
  googleAnalyticsId: 'google-analytics-id',
};

export const BLOG = {
  disabled: false,
  postsPerPage: 6,

  post: {
    permalink: '/%slug%', // Variables: %slug%, %year%, %month%, %day%, %hour%, %minute%, %second%, %category%
    noindex: false,
    disabled: false,
  },

  list: {
    pathname: 'blog', // Blog main path, you can change this to "articles" (/articles)
    noindex: false,
    disabled: false,
  },

  category: {
    pathname: 'category', // Category main path /category/some-category
    noindex: true,
    disabled: false,
  },

  tag: {
    pathname: 'tag', // Tag main path /tag/some-tag
    noindex: true,
    disabled: false,
  },
};
