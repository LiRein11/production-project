import { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

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
    S = 'size_s',
    M = 'size_m',
    L = 'size_l',
}

type HeaderTagType = 'h3' | 'h2' | 'h1';

const mapSizeToHeaderTag: Record<ETextSize, HeaderTagType> = {
    [ETextSize.S]: 'h3',
    [ETextSize.M]: 'h2',
    size_l: 'h1',
};

export interface TextProps {
    className?: string;
    text?: string;
    title?: string;
    theme?: ETextTheme;
    align?: ETextAlign;
    size?: ETextSize;

    'data-testid'?: string;
}

/**
 * Устарел, используются новые компоненты из папки redesigned
 * @deprecated
 */
export const Text = memo((props: TextProps) => {
    const {
        className,
        text,
        title,
        theme = ETextTheme.PRIMARY,
        align = ETextAlign.LEFT,
        size = ETextSize.M,
        'data-testid': dataTestId = 'Text',
    } = props;

    const HeaderTag = mapSizeToHeaderTag[size];

    return (
        <div className={classNames(cls.Text, {}, [className, cls[theme], cls[align], cls[size]])}>
            {title && (
                <HeaderTag data-testid={`${dataTestId}.Header`} className={cls.title}>
                    {title}
                </HeaderTag>
            )}
            {text && (
                <p data-testid={`${dataTestId}.Paragraph`} className={cls.text}>
                    {text}
                </p>
            )}
        </div>
    );
});
