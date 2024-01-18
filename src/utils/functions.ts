import { BLOG, SITE } from '@/config.mjs'
import slugify from 'limax'

const BASE_PATHNAME = SITE.basePathname

const createPath = (...params: string[]): string => {
  const paths = params
    .map((el) => trimSlash(el))
    .filter((el) => !!el)
    .join('/')
  return '/' + paths + (SITE.trailingSlash && paths ? '/' : '')
}

const definitivePermalink = (permalink: string): string =>
  createPath(BASE_PATHNAME, permalink)

export const trim = (str = '', ch?: string): string => {
  let start = 0,
    end = str.length || 0
  while (start < end && str[start] === ch) ++start
  while (end > start && str[end - 1] === ch) --end
  return start > 0 || end < str.length ? str.substring(start, end) : str
}

export const trimSlash = (s: string): string => trim(trim(s, '/'))

export const getAsset = (path: string): string =>
  '/' +
  [BASE_PATHNAME, path]
    .map((el) => trimSlash(el))
    .filter((el) => !!el)
    .join('/')

export const getCanonical = (path = ''): string | URL => {
  const url = String(new URL(path, SITE.origin))
  if (!SITE.trailingSlash && path && url.endsWith('/')) {
    return url.slice(0, -1)
  } else if (SITE.trailingSlash && path && !url.endsWith('/')) {
    return url + '/'
  }
  return url
}

export const cleanSlug = (text = ''): string =>
  trimSlash(text)
    .split('/')
    .map((slug) => slugify(slug))
    .join('/')

export const POST_PERMALINK_PATTERN = trimSlash(
  BLOG?.post?.permalink || '/%slug%'
)

export const BLOG_BASE = cleanSlug(BLOG?.list?.pathname)
export const CATEGORY_BASE = cleanSlug(BLOG?.category?.pathname || 'category')
export const TAG_BASE = cleanSlug(BLOG?.tag?.pathname) || 'tag'

export const getPermalink = (slug = '', type = 'page'): string => {
  let permalink: string

  switch (type) {
    case 'category':
      permalink = createPath(CATEGORY_BASE, trimSlash(slug))
      break

    case 'tag':
      permalink = createPath(TAG_BASE, trimSlash(slug))
      break

    case 'post':
      permalink = createPath(trimSlash(slug))
      break

    case 'page':
    default:
      permalink = createPath(slug)
      break
  }

  return definitivePermalink(permalink)
}

export const getHomePermalink = (): string => getPermalink('/')

export const getBlogPermalink = (): string => getPermalink(BLOG_BASE)
