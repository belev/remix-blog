import siteConfig from "../../../siteConfig.json";
import styles from "./Header.css";
import { Link, links as linkLinks } from "../Link/Link";
import { Icon } from "../Icon/Icon";
import { NavigationLink, links as navigationLinkLinks } from "./NavigationLink";

export const links = () => [
  { rel: "stylesheet", href: styles },
  ...linkLinks(),
  ...navigationLinkLinks(),
];

export const Header = () => (
  <header className="header">
    <nav className="navigation">
      <NavigationLink href="/">Home</NavigationLink>
      <NavigationLink href="/blog">Blog</NavigationLink>
      <NavigationLink href="/about">About</NavigationLink>
    </nav>
    <Link
      href={`${siteConfig.siteUrl}/rss.xml`}
      className="rss"
      aria-label="RSS feed"
    >
      <Icon name="rss" />
    </Link>
  </header>
);
