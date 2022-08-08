import type { Post } from '../types/Post';
import content from '../content.json';
import type { Tag, Tags } from '~/types/Tags';

export function getSortedPostsData({ limit }: { limit?: number } = {}): Post[] {
  const sortedPosts = Object.values(content.posts).sort(({ date: a }, { date: b }) =>
    b.localeCompare(a)
  );
  return limit ? sortedPosts.slice(0, limit) : sortedPosts;
}

export function getPostData(slug: string): Post {
  const post: Post | undefined = (content.posts as any)[slug];

  if (!post) {
    throw new Error('Not Found');
  }

  return post;
}

export function getPostsTags(): Tags {
  return content.tags;
}

export function getPostsForTag(tagSlug: string): { posts: Post[]; tag: string } {
  const tag: Tag | undefined = (content.tags as any)[tagSlug];

  if (!tag || !tag.posts.length) {
    throw new Error('Not Found');
  }

  const posts: Post[] = tag.posts.map((postSlug) => (content.posts as any)[postSlug]);

  return {
    posts,
    tag: tag.tagName
  };
}
