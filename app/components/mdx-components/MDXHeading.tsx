import classNames from 'clsx';
import kebabCase from 'lodash.kebabcase';
import { Link } from '../Link/Link';
import { Icon } from '../Icon/Icon';

type Tag = keyof Pick<JSX.IntrinsicElements, 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'>;

interface Props
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
  tag: Tag;
}

const headingToSizeMap: Record<Tag, string> = {
  h1: 'text-xxl',
  h2: 'text-xl',
  h3: 'text-l',
  h4: 'text-m',
  h5: 'text-m',
  h6: 'text-m'
};

export const MDXHeading = ({ tag: Tag, children }: Props) => {
  const id = kebabCase(children as string);

  return (
    <Tag className={classNames('mt-7 mb-4', headingToSizeMap[Tag])}>
      <Link href={`#${id}`} id={id} variant="text" className="peer scroll-mt-7 no-underline">
        {children}
      </Link>
      <Icon
        name="anchor"
        width="20"
        height="20"
        className="inline-block min-w-[20px] align-middle text-inherit opacity-0 transition-opacity duration-250 peer-hover:opacity-[1]"
      />
    </Tag>
  );
};
