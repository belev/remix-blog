import classNames from 'clsx';
import type { LinkProps as RemixLinkProps } from '@remix-run/react';
import { Link as RemixLink } from '@remix-run/react';

type Props = React.PropsWithChildren<
  Omit<RemixLinkProps, 'href' | 'to'> & {
    href: string;
    className?: string;
    variant?: 'primary' | 'secondary' | 'text';
  }
>;

export const Link = ({ children, href, className: propsClassName, variant, ...rest }: Props) => {
  const isInternalLink = href.startsWith('#') || href.startsWith('/');
  const className = classNames(
    'focus-visible:outline-double focus-visible:outline-[3px] focus-visible:outline-primary',
    {
      'underline hashover:no-underline hashover:shadow-[0_0_0_currentColor] hashover:transition-shadow hashover:duration-250 hover:shadow-[0_2px_0_currentColor]':
        variant,
      'text-primary': variant === 'primary',
      'text-text-secondary hover:text-text hover:transition-[color,box-shadow]':
        variant === 'secondary',
      'text-text': variant === 'text'
    },
    propsClassName
  );

  if (isInternalLink) {
    return (
      <RemixLink to={href} className={className} {...rest}>
        {children}
      </RemixLink>
    );
  }

  return (
    <a className={className} href={href} target="_blank" rel="noopener noreferrer" {...rest}>
      {children}
    </a>
  );
};
