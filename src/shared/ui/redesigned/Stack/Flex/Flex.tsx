import { DetailedHTMLProps, HTMLAttributes, ReactNode, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Mods, classNames } from '@/shared/lib/classNames/classNames';

import cls from './Flex.module.scss';

export type FlexAlign = 'center' | 'start' | 'end' | 'normal';
export type FlexJustify = 'center' | 'start' | 'end' | 'between';
export type FlexDirection = 'column' | 'row';
export type FlexWrap = 'nowrap' | 'wrap';
export type FlexGap = '4' | '8' | '16' | '24' | '32';

const alignClasses: Record<FlexAlign, string> = {
    center: cls.alignCenter,
    start: cls.alignStart,
    end: cls.alignEnd,
    normal: cls.alignNormal,
};

const justifyClasses: Record<FlexJustify, string> = {
    center: cls.justifyCenter,
    start: cls.justifyStart,
    end: cls.justifyEnd,
    between: cls.justifyBetween,
};

const directionClasses: Record<FlexDirection, string> = {
    row: cls.directionRow,
    column: cls.directionColumn,
};

const gapClasses: Record<FlexGap, string> = {
    4: cls.gap4,
    8: cls.gap8,
    16: cls.gap16,
    24: cls.gap24,
    32: cls.gap32,
};

type DivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export interface FlexProps extends DivProps {
    className?: string;
    children: ReactNode;
    align?: FlexAlign;
    justify?: FlexJustify;
    direction: FlexDirection;
    wrap?: FlexWrap;
    gap?: FlexGap;
    max?: boolean;
}

export const Flex = memo((props: FlexProps) => {
    const {
        className,
        children,
        align = 'center',
        justify = 'start',
        direction = 'row',
        wrap = 'nowrap',
        gap,
        max,
        ...otherProps
    } = props;
    const { t } = useTranslation();

    const classes = [
        className,
        alignClasses[align],
        justifyClasses[justify],
        directionClasses[direction],
        cls[wrap],
        gap && gapClasses[gap],
    ];

    const mods: Mods = {
        [cls.max]: max,
    };

    return (
        <div className={classNames(cls.Flex, mods, classes)} {...otherProps}>
            {children}
        </div>
    );
});
