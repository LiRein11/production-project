import { HTMLAttributes, ReactNode, memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Card.module.scss';

export enum ECardTheme {
    NORMAL = 'normal',
    OUTLINED = 'outlined',
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: ReactNode;
    theme?: ECardTheme;
    max?: boolean;
}

export const Card = memo((props: CardProps) => {
    const { className, children, theme = ECardTheme.NORMAL, max, ...otherProps } = props;

    return (
        <div className={classNames(cls.Card, { [cls.max]: max }, [className, cls[theme]])} {...otherProps}>
            {children}
        </div>
    );
});
