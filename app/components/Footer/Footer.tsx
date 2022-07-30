import siteConfig from '../../../siteConfig.json';

export const Footer = () => (
  <footer className="mt-6 border-t border-solid border-t-black-30  pt-4 pb-6 text-center text-text-secondary">
    <div>
      &copy; {new Date().getFullYear()} by {siteConfig.siteTitle}. All rights reserved.
    </div>
  </footer>
);
