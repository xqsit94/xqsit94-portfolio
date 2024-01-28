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
      author: SITE.author,
      customData: `<media:content
          xmlns:media="http://search.yahoo.com/mrss/"
          type="image/png"
          width="720"
          height="360"
          medium="image"
          url="${SITE.origin + post.heroImage}" />
      `
    })),

    trailingSlash: SITE.trailingSlash
  })

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml'
    }
  })
}
