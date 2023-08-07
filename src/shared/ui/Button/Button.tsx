import { ButtonHTMLAttributes, ReactNode, memo } from 'react';

import { Mods, classNames } from '@/shared/lib/classNames/classNames';

import cls from './Button.module.scss';

export enum EButtonTheme {
    CLEAR = 'clear',
    CLEAR_PRIMARY = 'clearPrimary',
    OUTLINE = 'outline',
    OUTLINE_RED = 'outline_red',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum EButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    /**
     * Тема кнопки. Отвечает за визуал (в рамке, без стилей, противоположный теме приложения цвет и тд)
     */
    theme?: EButtonTheme;
    /**
     * Флаг, делающий кнопку квадратной
     */
    square?: boolean;
    /**
     * Размер кнопки в соответствии с дизайн системой
     */
    size?: EButtonSize;
    /**
     * Флаг, отвечающий за работу кнопки
     */
    disabled?: boolean;
    /**
     * Содержимое кнопки
     */
    children?: ReactNode;
    /**
     * Растягивает кнопку на всю свободную ширину
     */
    fullWidth?: boolean;
}

export const Button = memo((props: ButtonProps) => {
    const {
        children,
        className,
        theme = EButtonTheme.OUTLINE,
        square,
        size = EButtonSize.M,
        disabled,
        fullWidth,
        ...otherProps
    } = props;

    const mods: Mods = {
        [cls.square]: square,
        [cls.disabled]: disabled,
        [cls.fullWidth]: fullWidth,
    };

    return (
        <button
            className={classNames(cls.Button, mods, [className, cls[theme], cls[size]])}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    );
});
