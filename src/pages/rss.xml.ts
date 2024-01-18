import { BLOG, SITE } from '@/config.mjs'
import { fetchPosts } from '@/utils/blogs.ts'
import { getPermalink } from '@/utils/functions.ts'
import { getRssString } from '@astrojs/rss'

export const GET = async () => {
  if (BLOG.disabled) {
    return new Response(null, {
      status: 404,
      statusText: 'Not found'
    })
  }

  const posts = await fetchPosts()

  const rss = await getRssString({
    title: `${SITE.title}`,
    description: SITE.description || '',
    site: SITE.origin,

    items: posts.map((post) => ({
      link: getPermalink(post.permalink, 'post'),
      title: post.title,
      description: post.description,
      pubDate: post.publishedDate!,
      categories: [post.category!],
      author: SITE.author
    })),

    trailingSlash: SITE.trailingSlash
  })

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml'
    }
  })
}
