import type { Post } from "../../types/Post";
import { Icon } from "../Icon/Icon";
import { Link, links as linkLinks } from "../Link/Link";
import styles from "./Posts.css";

export const links = () => [
  { rel: "stylesheet", href: styles },
  ...linkLinks(),
];

type Props = {
  posts: Post[];
};

export const Posts = ({ posts }: Props) => (
  <>
    {posts.map(({ slug, title, description }) => (
      <article key={slug}>
        <Link href={`/blog/${slug}`} className="posts-link">
          <h3 className="posts-heading">{title}</h3>
          <p className="description">{description}</p>

          <div className="read-more">
            Read more{" "}
            <span className="arrow">
              <Icon name="arrow-right" />
            </span>
          </div>
        </Link>
      </article>
    ))}
  </>
);
