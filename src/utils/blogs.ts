import type { CollectionEntry } from 'astro:content'
import { getCollection } from 'astro:content'
import type { Post } from '@/types'
import { cleanSlug, POST_PERMALINK_PATTERN, trimSlash } from '@/utils/functions'

/**
 * Generate permalink from post data
 * @param id
 * @param slug
 * @param published
 * @param category
 */
const generatePermalink = async ({
  id,
  slug,
  publishedDate,
  category
}: {
  id: string
  slug: string
  publishedDate: Date
  category?: string
}): Promise<string> => {
  const year = String(publishedDate.getFullYear()).padStart(4, '0')
  const month = String(publishedDate.getMonth() + 1).padStart(2, '0')
  const day = String(publishedDate.getDate()).padStart(2, '0')
  const hour = String(publishedDate.getHours()).padStart(2, '0')
  const minute = String(publishedDate.getMinutes()).padStart(2, '0')
  const second = String(publishedDate.getSeconds()).padStart(2, '0')

  const permalink = POST_PERMALINK_PATTERN.replace('%slug%', slug)
    .replace('%id%', id)
    .replace('%category%', category || '')
    .replace('%year%', year)
    .replace('%month%', month)
    .replace('%day%', day)
    .replace('%hour%', hour)
    .replace('%minute%', minute)
    .replace('%second%', second)

  return permalink
    .split('/')
    .map((el) => trimSlash(el))
    .filter((el) => !!el)
    .join('/')
}

/**
 * Get normalized post data
 * @param post
 */
const getNormalizedPost = async (
  post: CollectionEntry<'post'>
): Promise<Post> => {
  const { id, slug: rawSlug = '', data } = post
  const { Content } = await post.render()

  const {
    tags: rawTags = [],
    category: rawCategory,
    publishedDate: rawPublishDate = new Date(),
    ...rest
  } = data

  const slug = cleanSlug(rawSlug.split('/').pop())
  const publishedDate = new Date(rawPublishDate)
  const category = rawCategory ? cleanSlug(rawCategory) : undefined
  const tags = rawTags.map((tag: string) => cleanSlug(tag))

  return {
    id: id,
    slug: slug,

    publishedDate: publishedDate,
    category: category,
    tags: tags,

    ...rest,

    Content: Content,
    // or 'body' in case you consume from API

    permalink: await generatePermalink({ id, slug, publishedDate, category })
  }
}

/**
 * Load posts from collection
 */
const load = async function (): Promise<Array<Post>> {
  const posts = await getCollection('post')
  const normalizedPosts = posts.map(
    async (post) => await getNormalizedPost(post)
  )

  return (await Promise.all(normalizedPosts))
    .sort((a, b) => {
      if (b.publishedDate && a.publishedDate) {
        return b.publishedDate.valueOf() - a.publishedDate.valueOf()
      } else if (b.publishedDate) {
        return -1
      } else if (a.publishedDate) {
        return 1
      } else {
        return 0
      }
    })
    .filter((post) => !post.draft)
}

let _posts: Array<Post>

/**
 * Fetch posts from collection
 */
export const fetchPosts = async (): Promise<Array<Post>> => {
  if (!_posts) {
    _posts = await load()
  }

  return _posts
}

/**
 * Find post by slug
 * @param slugs
 */
export const findPostsBySlugs = async (
  slugs: Array<string>
): Promise<Array<Post>> => {
  if (!Array.isArray(slugs)) return []

  const posts = await fetchPosts()

  return slugs.reduce(function (r: Array<Post>, slug: string) {
    posts.some(function (post: Post) {
      return slug === post.slug && r.push(post)
    })
    return r
  }, [])
}

/**
 * Find post by id
 * @param ids
 */
export const findPostsByIds = async (
  ids: Array<string>
): Promise<Array<Post>> => {
  if (!Array.isArray(ids)) return []

  const posts = await fetchPosts()

  return ids.reduce(function (r: Array<Post>, id: string) {
    posts.some(function (post: Post) {
      return id === post.id && r.push(post)
    })
    return r
  }, [])
}

/**
 * Get latest posts
 * @param count
 */
export const findLatestPosts = async ({
  count
}: {
  count?: number
}): Promise<Array<Post>> => {
  const _count = count || 4
  const posts = await fetchPosts()

  return posts ? posts.slice(0, _count) : []
}

/**
 * Find post tags
 */
export const findTags = async (): Promise<Array<string>> => {
  const posts = await fetchPosts()
  const tags = posts.reduce((acc: any, post: Post) => {
    if (post.tags && Array.isArray(post.tags)) {
      return [...acc, ...post.tags]
    }
    return acc
  }, [])
  return [...(new Set(tags) as any)]
}

/**
 * Find post categories
 */
export const findCategories = async (): Promise<Array<string>> => {
  const posts = await fetchPosts()
  const categories = posts.reduce((acc: any, post: Post) => {
    if (post.category) {
      return [...acc, post.category]
    }
    return acc
  }, [])
  return [...(new Set(categories) as any)]
}
