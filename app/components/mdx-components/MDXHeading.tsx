import classNames from "clsx";
import kebabCase from "lodash.kebabcase";
import styles from "./MDXHeading.css";
import { Link } from "../Link/Link";
import { Icon } from "../Icon/Icon";

type Tag = keyof Pick<
  JSX.IntrinsicElements,
  "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
>;

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {
  tag: Tag;
}

export const links = () => [{ rel: "stylesheet", href: styles }];

export const MDXHeading = ({ tag: Tag, children }: Props) => {
  const id = kebabCase(children as string);

  return (
    <Tag className={classNames("heading", Tag)}>
      <Link href={`#${id}`} id={id} variant="text" className="mdx-link">
        {children}
      </Link>
      <Icon name="anchor" width="20" height="20" className="mdx-anchor" />
    </Tag>
  );
};
