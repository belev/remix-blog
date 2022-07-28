import classNames from "clsx";
import type { LinkProps as RemixLinkProps } from "@remix-run/react";
import { Link as RemixLink } from "@remix-run/react";
import styles from "./Link.css";

export const links = () => [{ rel: "stylesheet", href: styles }];

type Props = React.PropsWithChildren<
  Omit<RemixLinkProps, "href" | "to"> & {
    href: string;
    className?: string;
    variant?: "primary" | "secondary" | "text";
  }
>;

export const Link = ({
  children,
  href,
  className: propsClassName,
  variant,
  ...rest
}: Props) => {
  const isInternalLink = href.startsWith("#") || href.startsWith("/");
  const className = classNames("link", variant, propsClassName);

  if (isInternalLink) {
    return (
      <RemixLink to={href} className={className} {...rest}>
        {children}
      </RemixLink>
    );
  }

  return (
    <a
      className={className}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      {...rest}
    >
      {children}
    </a>
  );
};
