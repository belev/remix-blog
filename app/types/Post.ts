import type { ReadTimeResults } from 'reading-time';

export interface FrontMatter {
  title: string;
  description: string;
  date: string;
  tags?: string[];
}

export type Post = FrontMatter & {
  slug: string;
  code?: string;
  readingTime?: ReadTimeResults;
};
