import classNames from "clsx";
import styles from "./NavigationLink.css";
import { NavLink } from "@remix-run/react";

export const links = () => [{ rel: "stylesheet", href: styles }];

type Props = React.PropsWithChildren<{ href: string }>;

export const NavigationLink = ({ href, children }: Props) => {
  return (
    <NavLink
      to={href}
      className={({ isActive }) =>
        classNames("navigation-link", { active: isActive })
      }
    >
      {children}
    </NavLink>
  );
};
