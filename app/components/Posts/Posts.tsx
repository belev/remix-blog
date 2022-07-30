import type { Post } from '../../types/Post';
import { Icon } from '../Icon/Icon';
import { Link } from '../Link/Link';

type Props = {
  posts: Post[];
};

export const Posts = ({ posts }: Props) => (
  <>
    {posts.map(({ slug, title, description }) => (
      <article key={slug}>
        <Link href={`/blog/${slug}`} className="group block text-text no-underline">
          <h3 className="mt-7 mb-4 text-l group-hover:text-primary">{title}</h3>
          <p className="mb-4 text-base">{description}</p>

          <div className="flex items-center text-base">
            Read more{' '}
            <span className="text-primary opacity-0 transition-opacity duration-300 group-hover:text-primary group-hover:opacity-100">
              <Icon name="arrow-right" />
            </span>
          </div>
        </Link>
      </article>
    ))}
  </>
);
