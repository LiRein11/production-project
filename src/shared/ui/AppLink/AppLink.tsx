import { ForwardedRef, ReactNode, forwardRef } from 'react';
import { Link, LinkProps } from 'react-router-dom';

import { classNames } from '@/shared/lib/classNames/classNames';

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

export const AppLink = forwardRef((props: AppLinkProps, ref: ForwardedRef<HTMLAnchorElement>) => {
    const { children, className, to, theme = EAppLinkTheme.PRIMARY, ...otherProps } = props;
    return (
        <Link
            ref={ref}
            className={classNames(cls.AppLink, {}, [className, cls[theme]])}
            to={to}
            {...otherProps}
        >
            {children}
        </Link>
    );
});
