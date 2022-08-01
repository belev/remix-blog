import type { MetaFunction } from '@remix-run/node';
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';
import siteConfig from '../siteConfig.json';
import { SkipNavigationLink } from '~/components/SkipNavigationLink/SkipNavigationLink';
import { Footer } from '~/components/Footer/Footer';
import { Header } from '~/components/Header/Header';
import tailwindStyles from './styles/tailwind.css';
import highlightingStyles from './styles/highlighting.css';
import appStyles from './styles/app.css';

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: siteConfig.siteTitle,
  'og:title': siteConfig.siteTitle,
  description: siteConfig.siteDescription,
  'og:description': siteConfig.siteDescription,
  'og:image:url': `${siteConfig.siteUrl}/${siteConfig.siteImage}`,
  'og:image:alt': `${siteConfig.siteTitle} Software Engineer`,
  'twitter:card': 'summary_large_image',
  viewport: 'width=device-width,initial-scale=1'
});

export const links = () => [
  {
    rel: 'preload',
    as: 'font',
    href: '/fonts/ibm-plex-sans-latin-italic.woff2',
    type: 'font/woff2',
    crossOrigin: 'anonymous'
  },
  {
    rel: 'preload',
    as: 'font',
    href: '/fonts/ibm-plex-sans-latin-regular.woff2',
    type: 'font/woff2',
    crossOrigin: 'anonymous'
  },
  { rel: 'stylesheet', href: tailwindStyles },
  { rel: 'stylesheet', href: appStyles },
  { rel: 'stylesheet', href: highlightingStyles }
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Layout>
          <Outlet />
        </Layout>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

const Layout = ({ children }: React.PropsWithChildren<unknown>) => (
  <>
    <SkipNavigationLink />
    <div className="my-0 mx-auto flex h-full max-w-screen-648 flex-col py-0 px-4">
      <Header />
      <main className="grow" id="skip-nav">
        {children}
      </main>
      <Footer />
    </div>
  </>
);
