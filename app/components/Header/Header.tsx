import siteConfig from '../../../siteConfig.json';
import { Link } from '../Link/Link';
import { Icon } from '../Icon/Icon';
import { NavigationLink } from './NavigationLink';

export const Header = () => (
  <header className="my-6 mx-0 flex items-center justify-between">
    <nav className="-ml-3 flex gap-2">
      <NavigationLink href="/">Home</NavigationLink>
      <NavigationLink href="/blog">Blog</NavigationLink>
      <NavigationLink href="/about">About</NavigationLink>
    </nav>
    <Link
      href={`${siteConfig.siteUrl}/rss.xml`}
      className="transion-colors -mr-1 text-text-secondary duration-300 hover:text-text"
      aria-label="RSS feed"
    >
      <Icon name="rss" />
    </Link>
  </header>
);
