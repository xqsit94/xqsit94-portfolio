export const SITE = {
  title: 'My personal website.',
  description: 'Welcome to my website!',

  origin: 'http://localhost:3000',
  basePathname: '/',
  trailingSlash: false,
};

export const BLOG = {
  disabled: false,
  postsPerPage: 4,

  googleSiteVerificationId: 'google-site-verification-code',
  googleAnalyticsId: 'google-analytics-id',

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
