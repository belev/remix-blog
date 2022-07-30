type Props = JSX.IntrinsicElements['blockquote'];

export const MDXBlockquote = ({ children }: Props) => (
  <blockquote className="border-l-[6px] border-solid border-l-primary pl-4 italic">
    {children}
  </blockquote>
);
