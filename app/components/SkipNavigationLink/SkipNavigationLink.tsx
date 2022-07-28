import {
  VisuallyHidden,
  links as visuallyHiddenLinks,
} from "../VisuallyHidden/VisuallyHidden";
import styles from "./SkipNavigationLink.css";

export const links = () => [
  { rel: "stylesheet", href: styles },
  ...visuallyHiddenLinks(),
];

export const SkipNavigationLink = () => (
  <VisuallyHidden>
    <a href="#skip-nav" className="skip-nav-link">
      Skip to content
    </a>
  </VisuallyHidden>
);
