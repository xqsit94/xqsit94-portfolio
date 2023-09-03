import type { AstroComponentFactory } from 'astro/dist/runtime/server'

export interface Post {
  id: string
  slug: string

  title: string
  description?: string

  heroImage?: string

  canonical?: string | URL
  permalink?: string

  draft?: boolean

  category?: string
  tags?: Array<string>

  Content: AstroComponentFactory
  content?: string

  archived?: Date
  publishedDate?: Date
  updatedDate?: Date
}

export interface MetaSEO {
  title?: string
  description?: string
  image?: string

  canonical?: string | URL
  noindex?: boolean
  nofollow?: boolean

  ogTitle?: string
  ogType?: string
}
