import * as fs from 'fs/promises';
import matter from 'gray-matter';
import path from 'path';
import readingTime from 'reading-time';
import { bundleMDX } from 'mdx-bundler';
import rehypePrism from 'rehype-prism-plus';
import remarkMdxImages from 'remark-mdx-images';
import type { FrontMatter, Post } from '~/types/Post';
import kebabCase from 'lodash.kebabcase';
import type { Tags } from '~/types/Tags';

const postsDirectory = path.join(process.cwd(), 'app', 'posts');

interface FileName {
  fullFileName: string;
  fileName: string;
}

async function getPostsFileNames(): Promise<FileName[]> {
  const postsDirectoryFiles = await fs.readdir(postsDirectory);

  return postsDirectoryFiles
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fullFileName) => ({
      fullFileName,
      fileName: fullFileName.replace(/\.mdx$/, '')
    }));
}

export async function getSortedPostsData({ limit }: { limit?: number } = {}): Promise<Post[]> {
  const fileNames = await getPostsFileNames();
  const allPostsData = await Promise.all(
    fileNames.map(async ({ fileName, fullFileName }) => {
      const fullPath = path.join(postsDirectory, fullFileName);
      const fileContents = await fs.readFile(fullPath, 'utf8');

      const matterResult = matter(fileContents);

      return {
        slug: fileName,
        ...(matterResult.data as FrontMatter)
      };
    })
  );

  // Sort posts by date
  const sortedPosts = allPostsData.sort(({ date: a }, { date: b }) => b.localeCompare(a));
  return limit ? sortedPosts.slice(0, limit) : sortedPosts;
}

const getPostData = async (slug: string): Promise<Post> => {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);

  const fileContents = await fs.readFile(fullPath, 'utf8');

  const matterResult = matter(fileContents);
  const compiledMDX = await getCompiledMDX(fileContents, postsDirectory);

  return {
    slug,
    ...(matterResult.data as FrontMatter),
    code: compiledMDX.code,
    readingTime: readingTime(fileContents)
  };
};

const getCompiledMDX = async (source: string, directory: string) => {
  return bundleMDX({
    cwd: directory,
    source,
    xdmOptions: (options) => {
      options.remarkPlugins = [...(options.remarkPlugins ?? []), remarkMdxImages];
      options.rehypePlugins = [...(options.rehypePlugins ?? []), rehypePrism];

      return options;
    }
  });
};

(async () => {
  const posts = await getSortedPostsData();
  const compiledPosts = await Promise.all(posts.map((post) => getPostData(post.slug)));
  const result = compiledPosts.reduce<{
    posts: { [key: string]: Post };
    tags: Tags;
  }>(
    (acc, compiledPost) => {
      acc.posts[compiledPost.slug] = compiledPost;
      compiledPost.tags?.forEach((tag) => {
        const tagSlug = kebabCase(tag);
        if (!acc.tags[tagSlug]) {
          acc.tags[tagSlug] = { postsCount: 0, slug: tagSlug, tagName: tag, posts: [] };
        }
        acc.tags[tagSlug].postsCount += 1;

        if (!acc.tags[tagSlug].posts.includes(compiledPost.slug)) {
          acc.tags[tagSlug].posts.push(compiledPost.slug);
        }
      });
      return acc;
    },
    { posts: {}, tags: {} }
  );

  await fs.writeFile(
    path.join(process.cwd(), 'app', 'content.json'),
    JSON.stringify(result, null, 2)
  );

  console.log('Generated public/content.json successfully 🚀');
})();
