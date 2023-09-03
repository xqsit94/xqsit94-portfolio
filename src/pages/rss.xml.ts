import rss, { type RSSOptions } from '@astrojs/rss'
import { getCollection } from 'astro:content'
import { SITE, BLOG } from '@/config.mjs'

export async function get(context: RSSOptions) {
  console.log(context, 'context')
  if (BLOG.disabled) {
    return {
      status: 404,
      statusText: 'Not found'
    }
  }

  const posts = await getCollection('post')
  return rss({
    title: SITE.title,
    description: SITE.description,
    site: context.site,
    items: posts.map((post) => ({
      ...post.data,
      pubDate: post.data.publishedDate,
      link: `/${post.slug}`
    })),
    trailingSlash: SITE.trailingSlash
  })
}
