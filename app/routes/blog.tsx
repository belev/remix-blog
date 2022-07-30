import type { MetaFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { PageInformation } from '~/components/PageInformation/PageInformation';
import { PageSection } from '~/components/PageSection/PageSection';
import { Posts } from '~/components/Posts/Posts';
import { getSortedPostsData } from '~/lib/posts.server';

export const loader = async () => {
  return json({ posts: getSortedPostsData() });
};

export const meta: MetaFunction = () => {
  return { title: 'Blog' };
};

export default function Index() {
  const { posts } = useLoaderData<typeof loader>();
  return (
    <>
      <PageInformation heading="Blog" />

      <PageSection heading="All Posts">
        <Posts posts={posts} />
      </PageSection>
    </>
  );
}
