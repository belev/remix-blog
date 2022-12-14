import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { PageInformation } from '~/components/PageInformation/PageInformation';
import { PageSection } from '~/components/PageSection/PageSection';
import { Posts } from '~/components/Posts/Posts';
import { getSortedPostsData } from '~/lib/posts.server';
import siteConfig from '../../siteConfig.json';

export const loader = async () => {
  return json({ posts: getSortedPostsData({ limit: 5 }) });
};

export default function Index() {
  const { posts } = useLoaderData<typeof loader>();
  return (
    <>
      <PageInformation heading={siteConfig.siteTitle}>
        <p>{`Welcome 👋! Introduce yourself here.`}</p>
      </PageInformation>

      <PageSection heading="Latest Posts" navigation={{ href: '/blog', text: 'Read all posts' }}>
        <Posts posts={posts} />
      </PageSection>
    </>
  );
}
