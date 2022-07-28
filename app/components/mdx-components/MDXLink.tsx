import { Link } from "../Link/Link";

type Props = JSX.IntrinsicElements["a"];

export const MDXLink = ({ href, children, className }: Props) => {
  if (!href) {
    throw new Error("Link without href - please provide href!");
  }

  return (
    <Link href={href} className={className} variant="primary">
      {children}
    </Link>
  );
};
