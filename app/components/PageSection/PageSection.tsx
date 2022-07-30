import { Link } from '../Link/Link';

type Props = React.PropsWithChildren<{
  heading: string;
  navigation?: {
    href: string;
    text: string;
  };
}>;

export const PageSection = ({ heading, navigation, children }: Props) => (
  <section>
    <div className="flex items-center justify-between border-b border-solid border-black-30 pb-4">
      <h2 className="text-xl">{heading}</h2>
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
