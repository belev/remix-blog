import type { LoaderArgs, MetaFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { getPostData } from '~/lib/posts.server';
import invariant from 'invariant';
import { useLoaderData } from '@remix-run/react';
import type { Post } from '~/types/Post';
import { getMDXComponent } from 'mdx-bundler/client';
import { useMemo } from 'react';
import MDXComponents from '~/components/mdx-components';

type LoaderData = {
  post: Post;
};

export const loader = async ({ params }: LoaderArgs) => {
  invariant(params.slug, 'Post slug is required!');

  const post = await getPostData(params.slug);
  return json<LoaderData>({ post });
};

export const meta: MetaFunction = ({ data }: { data: LoaderData }) => {
  if (!data) {
    return {
      title: 'Not found',
      description: 'No blog post found'
    };
  }
  return { title: data.post.title, description: data.post.description };
};

export default function Index() {
  const { post } = useLoaderData<typeof loader>();
  const Component = useMemo(() => post.code && getMDXComponent(post.code), [post.code]);

  return (
    <>
      <h1 className="mb-4 text-xxl">{post.title}</h1>
      <p className="text-base text-text-secondary">
        {new Date(post.date).toLocaleDateString('en', {
          year: 'numeric',
          month: 'long',
          day: '2-digit'
        })}
        {post.readingTime && ` ⦁ ${post.readingTime?.text}`}
      </p>
      {Component && <Component components={MDXComponents} />}
    </>
  );
}
