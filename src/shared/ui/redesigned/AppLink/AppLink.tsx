import { Link, LinkProps } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';
import { memo, ReactNode } from 'react';

export type AppLinkVariant = 'primary' | 'red';

interface AppLinkProps extends LinkProps {
  className?: string;
  variant?: AppLinkVariant;
  children?: ReactNode;
}

/**
 * @deprecated
 */

export const AppLink = memo((props: AppLinkProps) => {
  const {
    to,
    className,
    children,
    variant = 'primary',
    ...otherProps
  } = props;

  return (
      <Link
      to={to}
      {...otherProps}
      className={classNames(cls.AppLink, {}, [className, cls[variant]])}
    >
          {children}
      </Link>
  );
});
