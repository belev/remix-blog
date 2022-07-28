import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import siteConfig from "../siteConfig.json";
import rootStyles from "~/styles/root.css";
import globalStyles from "~/styles/global.css";
import highlightingStyles from "~/styles/highlighting.css";
import {
  SkipNavigationLink,
  links as skipNavigationLinkLinks,
} from "~/components/SkipNavigationLink/SkipNavigationLink";
import { Footer, links as footerLinks } from "~/components/Footer/Footer";
import { Header, links as headerLinks } from "~/components/Header/Header";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: siteConfig.siteTitle,
  "og:title": siteConfig.siteTitle,
  description: siteConfig.siteDescription,
  "og:description": siteConfig.siteDescription,
  "og:image:url": `${siteConfig.siteUrl}/${siteConfig.siteImage}`,
  "og:image:alt": `${siteConfig.siteTitle} Software Engineer`,
  "twitter:card": "summary_large_image",
  viewport: "width=device-width,initial-scale=1",
});

export const links = () => [
  { rel: "stylesheet", href: globalStyles },
  { rel: "stylesheet", href: highlightingStyles },
  { rel: "stylesheet", href: rootStyles },
  ...skipNavigationLinkLinks(),
  ...footerLinks(),
  ...headerLinks(),
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
    <div className="container">
      <Header />
      <main className="main" id="skip-nav">
        {children}
      </main>
      <Footer />
    </div>
  </>
);
