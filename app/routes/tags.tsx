import type { MetaFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { PageInformation } from '~/components/PageInformation/PageInformation';
import { getPostsTags } from '~/lib/posts.server';
import siteConfig from '../../siteConfig.json';
import kebabCase from 'lodash.kebabcase';
import { Link } from '~/components/Link/Link';

export const loader = async () => {
  return json({ tags: getPostsTags() });
};

export const meta: MetaFunction = () => {
  return { title: `Tags | ${siteConfig.siteTitle}` };
};

export default function Index() {
  const { tags } = useLoaderData<typeof loader>();
  return (
    <>
      <PageInformation heading="Tags">
        <ul className="mt-6 [&>li:not(:last-child)]:mb-4">
          {Object.entries(tags).map(([tag, tagPosts]) => (
            <li key={tag}>
              <Link href={`/tags/${kebabCase(tag)}`} variant="secondary">
                {tag} ({tagPosts} {tagPosts === 1 ? 'post' : 'posts'})
              </Link>
            </li>
          ))}
        </ul>
      </PageInformation>
    </>
  );
}
