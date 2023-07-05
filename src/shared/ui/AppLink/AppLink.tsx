import { classNames } from 'shared/lib/classNames/classNames';
import { ReactNode, memo } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import cls from './AppLink.module.scss';

export const enum EAppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    RED = 'red',
}

export interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: EAppLinkTheme;
    children: ReactNode;
}

export const AppLink = memo((props: AppLinkProps) => {
    const { children, className, to, theme = EAppLinkTheme.PRIMARY, ...otherProps } = props;
    return (
        <Link className={classNames(cls.AppLink, {}, [className, cls[theme]])} to={to} {...otherProps}>
            {children}
        </Link>
    );
});
