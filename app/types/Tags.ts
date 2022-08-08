export type Tag = {
  postsCount: number;
  slug: string;
  tagName: string;
  posts: string[];
};

export type Tags = {
  [key: string]: Tag;
};
