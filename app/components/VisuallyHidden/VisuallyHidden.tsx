import React from "react";
import classNames from "clsx";
import styles from "./VisuallyHidden.css";

export const links = () => [{ rel: "stylesheet", href: styles }];

type Props = {
  children: React.ReactElement;
};

export const VisuallyHidden = ({ children }: Props) =>
  React.cloneElement(children, {
    ...children.props,
    className: classNames("hidden", children.props["className"]),
  });
