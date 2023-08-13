import { ForwardedRef, ReactNode, forwardRef } from 'react';
import { LinkProps, NavLink } from 'react-router-dom';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './AppLink.module.scss';

export type AppLinkVariant = 'primary' | 'red';

export interface AppLinkProps extends LinkProps {
    className?: string;
    variant?: AppLinkVariant;
    children: ReactNode;
    activeClassName?: string;
}

export const AppLink = forwardRef((props: AppLinkProps, ref: ForwardedRef<HTMLAnchorElement>) => {
    const {
        children,
        className,
        to,
        variant = 'primary',
        activeClassName = '',
        ...otherProps
    } = props;
    return (
        <NavLink
            ref={ref}
            className={({ isActive }) =>
                classNames('', { [activeClassName]: isActive }, [className, cls[variant]])
            }
            to={to}
            {...otherProps}
        >
            {children}
        </NavLink>
    );
});
