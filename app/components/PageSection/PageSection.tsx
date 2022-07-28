import { Link } from "../Link/Link";
import styles from "./PageSection.css";

type Props = React.PropsWithChildren<{
  heading: string;
  navigation?: {
    href: string;
    text: string;
  };
}>;

export const links = () => [{ rel: "stylesheet", href: styles }];

export const PageSection = ({ heading, navigation, children }: Props) => (
  <section>
    <div className="page-section-heading-wrapper">
      <h2 className="page-section-heading">{heading}</h2>
      {navigation && (
        <div>
          <Link href={navigation.href} variant="secondary">
            {navigation.text}
          </Link>
        </div>
      )}
    </div>
    {children}
  </section>
);
