import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './Text.module.scss';

export enum ETextTheme {
    PRIMARY = 'primary',
    ERROR = 'error',
}

export interface TextProps {
    className?: string;
    text?: string;
    title?: string;
    theme?: ETextTheme;
}

export const Text = memo(({ className, text, title, theme = ETextTheme.PRIMARY }: TextProps) => {
    return (
        <div className={classNames(cls.Text, {}, [className, cls[theme]])}>
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
});
