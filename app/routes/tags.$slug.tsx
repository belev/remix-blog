import type { LoaderArgs, MetaFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { getPostsForTag } from '~/lib/posts.server';
import invariant from 'invariant';
import { useLoaderData } from '@remix-run/react';
import { PageInformation } from '~/components/PageInformation/PageInformation';
import { PageSection } from '~/components/PageSection/PageSection';
import { Posts } from '~/components/Posts/Posts';

type LoaderData = ReturnType<typeof getPostsForTag>;

export const loader = async ({ params }: LoaderArgs) => {
  invariant(params.slug, 'Tag slug is required!');

  try {
    return json<LoaderData>(getPostsForTag(params.slug));
  } catch (error) {
    throw new Response('Not Found', { status: 404 });
  }
};

export const meta: MetaFunction = ({ data, params }) => {
  if (!data || !data.posts.length) {
    return {
      title: 'Not found',
      description: `No tag ${params.slug} found`
    };
  }
  return { title: data.tag, description: `Read all posts for ${data.tag}` };
};

export default function Index() {
  const { posts, tag } = useLoaderData<typeof loader>();

  return (
    <>
      <PageInformation heading="Tags" />

      <PageSection heading={tag} navigation={{ href: '/tags', text: 'View all tags' }}>
        <Posts posts={posts} />
      </PageSection>
    </>
  );
}
