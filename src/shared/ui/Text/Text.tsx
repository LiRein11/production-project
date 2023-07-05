import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './Text.module.scss';

export enum ETextTheme {
    PRIMARY = 'primary',
    INVERTED = 'inverted',
    ERROR = 'error',
}

export enum ETextAlign {
    LEFT = 'left',
    RIGHT = 'right',
    CENTER = 'center',
}

export enum ETextSize {
    M = 'size_m',
    L = 'size_l',
}

export interface TextProps {
    className?: string;
    text?: string;
    title?: string;
    theme?: ETextTheme;
    align?: ETextAlign;
    size?: ETextSize;
}

export const Text = memo((props: TextProps) => {
    const { className, text, title, theme = ETextTheme.PRIMARY, align = ETextAlign.LEFT, size = ETextSize.M } = props;

    return (
        <div className={classNames(cls.Text, {}, [className, cls[theme], cls[align], cls[size]])}>
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
});
