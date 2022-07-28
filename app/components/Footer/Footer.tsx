import siteConfig from "../../../siteConfig.json";
import styles from "./Footer.css";

export const links = () => [{ rel: "stylesheet", href: styles }];

export const Footer = () => (
  <footer className="footer">
    <div>
      &copy; {new Date().getFullYear()} by {siteConfig.siteTitle}. All rights
      reserved.
    </div>
  </footer>
);
