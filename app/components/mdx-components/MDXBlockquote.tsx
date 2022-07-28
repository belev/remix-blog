import styles from "./MDXBlockquote.css";

export const links = () => [{ rel: "stylesheet", href: styles }];

type Props = JSX.IntrinsicElements["blockquote"];

export const MDXBlockquote = ({ children }: Props) => (
  <blockquote className="blockquote">{children}</blockquote>
);
