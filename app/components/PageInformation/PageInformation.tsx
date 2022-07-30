type Props = React.PropsWithChildren<{ heading: string }>;

export const PageInformation = ({ heading, children }: Props) => (
  <section>
    <h1 className="mb-4 text-xxl">{heading}</h1>
    {children}
  </section>
);
