import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';
import { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';

export const enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

export interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = (props) => {
  const { children, className, to, theme = AppLinkTheme.PRIMARY, ...otherProps } = props;
  return (
    <Link className={classNames(cls.AppLink, {}, [className, cls[theme]])} to={to} {...otherProps}>
      {children}
    </Link>
  );
};
