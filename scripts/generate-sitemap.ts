import * as fs from 'fs/promises';
import { globby } from 'globby';
import prettier from 'prettier';
import siteConfig from '../siteConfig.json';
import content from '../app/content.json';

const getXmlUrlItem = (route: string): string => {
  return `
    <url>
      <loc>${`${siteConfig.siteUrl}${route}`}</loc>
      <changefreq>daily</changefreq>
      <priority>0.7</priority>
    </url>
  `;
};

(async () => {
  const pages = await globby([
    'app/routes/*.tsx',
    '!app/routes/blog.$slug.tsx',
    '!app/routes/tags.$slug.tsx'
  ]);

  const sitemap = `
      <?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
        ${pages
          .map((page) => {
            const path = page.replace('app/routes', '').replace('.tsx', '');
            const route = path === '/index' ? '' : path;

            return getXmlUrlItem(route);
          })
          .join('')}

        ${Object.keys(content.posts)
          .map((postSlug) => {
            return getXmlUrlItem(`/blog/${postSlug}`);
          })
          .join('')}

        ${Object.keys(content.tags)
          .map((tagSlug) => {
            return getXmlUrlItem(`/tags/${tagSlug}`);
          })
          .join('')}
    </urlset>
    `;

  const prettierConfig = await prettier.resolveConfig('./.prettierrc.js');
  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: 'html'
  });

  await fs.writeFile('public/sitemap.xml', formatted);

  console.log('Generated public/sitemap.xml successfully 🚀');
})();
