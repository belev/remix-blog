import classNames from 'clsx';
import { NavLink } from '@remix-run/react';

type Props = React.PropsWithChildren<{ href: string }>;

export const NavigationLink = ({ href, children }: Props) => {
  return (
    <NavLink
      to={href}
      className={({ isActive }) =>
        classNames(
          'rounded-m py-1 px-3 text-text-secondary no-underline transition-colors duration-300 hover:bg-black-15',
          {
            'font-semibold text-text': isActive
          }
        )
      }
    >
      {children}
    </NavLink>
  );
};
