import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './Text.module.scss';

export enum ETextTheme {
    PRIMARY = 'primary',
    ERROR = 'error',
}

export enum ETextAlign {
    LEFT = 'left',
    RIGHT = 'right',
    CENTER = 'center',
}

export interface TextProps {
    className?: string;
    text?: string;
    title?: string;
    theme?: ETextTheme;
    align?: ETextAlign;
}

export const Text = memo((props: TextProps) => {
    const { className, text, title, theme = ETextTheme.PRIMARY, align = ETextAlign.LEFT } = props;

    return (
        <div className={classNames(cls.Text, {}, [className, cls[theme], cls[align]])}>
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
});
