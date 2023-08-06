import { DetailedHTMLProps, HTMLAttributes, ReactNode, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Mods, classNames } from '@/shared/lib/classNames/classNames';

import cls from './Flex.module.scss';

export type FlexAlign = 'center' | 'start' | 'end';
export type FlexJustify = 'center' | 'start' | 'end' | 'between';
export type FlexDirection = 'column' | 'row';
export type FlexGap = '4' | '8' | '16' | '32';

const alignClasses: Record<FlexAlign, string> = {
    center: cls.alignCenter,
    start: cls.alignStart,
    end: cls.alignEnd,
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
    32: cls.gap32,
};

type DivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export interface FlexProps extends DivProps {
    className?: string;
    children: ReactNode;
    align?: FlexAlign;
    justify?: FlexJustify;
    direction: FlexDirection;
    gap?: FlexGap;
    max?: boolean;
}

export const Flex = memo((props: FlexProps) => {
    const { className, children, align = 'center', justify = 'start', direction = 'row', gap, max, ...otherProps } = props;
    const { t } = useTranslation();

    const classes = [className, alignClasses[align], justifyClasses[justify], directionClasses[direction], gap && gapClasses[gap]];

    const mods: Mods = {
        [cls.max]: max,
    };

    return (
        <div className={classNames(cls.Flex, mods, classes)} {...otherProps}>
            {children}
        </div>
    );
});
