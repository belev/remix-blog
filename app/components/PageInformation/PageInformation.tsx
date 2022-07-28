import styles from "./PageInformation.css";

export const links = () => [{ rel: "stylesheet", href: styles }];

type Props = React.PropsWithChildren<{ heading: string }>;

export const PageInformation = ({ heading, children }: Props) => (
  <section>
    <h1 className="page-information-heading">{heading}</h1>
    {children}
  </section>
);
