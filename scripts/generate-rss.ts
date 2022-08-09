import * as fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { globby } from 'globby';
import RSS from 'rss';
import siteConfig from '../siteConfig.json';
import type { FrontMatter, Post } from '~/types/Post';

(async () => {
  const postPaths = await globby(['app/posts/*.mdx']);
  const readPosts = postPaths.map(async (postPath) => {
    const fullPath = path.join(process.cwd(), postPath);
    const fileContents = await fs.readFile(fullPath, 'utf8');

    const matterResult = matter(fileContents);

    return {
      slug: postPath.replace('app/posts/', 'blog/').replace(/\.mdx$/, ''),
      ...(matterResult.data as FrontMatter)
    };
  });

  const postsData: Post[] = await Promise.all(readPosts);

  const rss = new RSS({
    title: siteConfig.siteTitle,
    description: siteConfig.siteDescription,
    site_url: siteConfig.siteUrl,
    feed_url: `${siteConfig.siteUrl}/rss.xml`,
    language: 'en'
  });

  postsData.forEach(({ title, description, date, slug }) => {
    rss.item({
      title,
      description,
      date,
      url: `${siteConfig.siteUrl}/${slug}`
    });
  });

  await fs.writeFile('public/rss.xml', rss.xml({ indent: '  ' }));

  console.log('Generated public/rss.xml successfully 🚀');
})();
