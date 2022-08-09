import * as fs from 'fs/promises';
import RSS from 'rss';
import siteConfig from '../siteConfig.json';
import content from '../app/content.json';

(async () => {
  const rss = new RSS({
    title: siteConfig.siteTitle,
    description: siteConfig.siteDescription,
    site_url: siteConfig.siteUrl,
    feed_url: `${siteConfig.siteUrl}/rss.xml`,
    language: 'en'
  });

  Object.values(content.posts).forEach(({ title, description, date, slug }) => {
    rss.item({
      title,
      description,
      date,
      url: `${siteConfig.siteUrl}/blog/${slug}`
    });
  });

  await fs.writeFile('public/rss.xml', rss.xml({ indent: '  ' }));

  console.log('Generated public/rss.xml successfully 🚀');
})();
