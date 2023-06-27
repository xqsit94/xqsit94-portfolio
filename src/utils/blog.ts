import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';
import type { Post } from '~/types';
import { cleanSlug, trimSlash, POST_PERMALINK_PATTERN } from '~/utils/permalinks';

const generatePermalink = async ({ id, slug, pubDate, category }) => {
  const year = String(pubDate.getFullYear()).padStart(4, '0');
  const month = String(pubDate.getMonth() + 1).padStart(2, '0');
  const day = String(pubDate.getDate()).padStart(2, '0');
  const hour = String(pubDate.getHours()).padStart(2, '0');
  const minute = String(pubDate.getMinutes()).padStart(2, '0');
  const second = String(pubDate.getSeconds()).padStart(2, '0');

  const permalink = POST_PERMALINK_PATTERN.replace('%slug%', slug)
    .replace('%id%', id)
    .replace('%category%', category || '')
    .replace('%year%', year)
    .replace('%month%', month)
    .replace('%day%', day)
    .replace('%hour%', hour)
    .replace('%minute%', minute)
    .replace('%second%', second);

  return permalink
    .split('/')
    .map((el) => trimSlash(el))
    .filter((el) => !!el)
    .join('/');
};

const getNormalizedPost = async (post: CollectionEntry<'post'>): Promise<Post> => {
  const { id, slug: rawSlug = '', data } = post;
  const { Content, remarkPluginFrontmatter } = await post.render();

  const { tags: rawTags = [], category: rawCategory, pubDate: rawPublishDate = new Date(), ...rest } = data;

  const slug = cleanSlug(rawSlug.split('/').pop());
  const pubDate = new Date(rawPublishDate);
  const category = rawCategory ? cleanSlug(rawCategory) : undefined;
  const tags = rawTags.map((tag: string) => cleanSlug(tag));

  return {
    id: id,
    slug: slug,

    pubDate: pubDate,
    category: category,
    tags: tags,

    ...rest,

    Content: Content,
    // or 'body' in case you consume from API

    permalink: await generatePermalink({ id, slug, pubDate, category }),
  };
};

const load = async function (): Promise<Array<Post>> {
  const posts = await getCollection('post');
  const normalizedPosts = posts.map(async (post) => await getNormalizedPost(post));

  const results = (await Promise.all(normalizedPosts))
    .sort((a, b) => b.pubDate.valueOf() - a.pubDate.valueOf())
    .filter((post) => !post.draft);
  
  return results;
};

let _posts: Array<Post>;

/** */
export const fetchPosts = async (): Promise<Array<Post>> => {
  if (!_posts) {
    _posts = await load();
  }

  return _posts;
};

/** */
export const findPostsBySlugs = async (slugs: Array<string>): Promise<Array<Post>> => {
  if (!Array.isArray(slugs)) return [];

  const posts = await fetchPosts();

  return slugs.reduce(function (r: Array<Post>, slug: string) {
    posts.some(function (post: Post) {
      return slug === post.slug && r.push(post);
    });
    return r;
  }, []);
};

/** */
export const findPostsByIds = async (ids: Array<string>): Promise<Array<Post>> => {
  if (!Array.isArray(ids)) return [];

  const posts = await fetchPosts();

  return ids.reduce(function (r: Array<Post>, id: string) {
    posts.some(function (post: Post) {
      return id === post.id && r.push(post);
    });
    return r;
  }, []);
};

/** */
export const findLatestPosts = async ({ count }: { count?: number }): Promise<Array<Post>> => {
  const _count = count || 4;
  const posts = await fetchPosts();

  return posts ? posts.slice(0, _count) : [];
};

/** */
export const findTags = async (): Promise<Array<string>> => {
  const posts = await fetchPosts();
  const tags = posts.reduce((acc, post: Post) => {
    if (post.tags && Array.isArray(post.tags)) {
      return [...acc, ...post.tags];
    }
    return acc;
  }, []);
  return [...new Set(tags)];
};

/** */
export const findCategories = async (): Promise<Array<string>> => {
  const posts = await fetchPosts();
  const categories = posts.reduce((acc, post: Post) => {
    if (post.category) {
      return [...acc, post.category];
    }
    return acc;
  }, []);
  return [...new Set(categories)];
};
