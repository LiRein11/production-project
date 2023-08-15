import { ButtonHTMLAttributes, ReactNode, memo } from 'react';

import { Mods, classNames } from '@/shared/lib/classNames/classNames';

import cls from './Button.module.scss';

export type ButtonVariant = 'clear' | 'outline' | 'filled';

export type ButtonSize = 'm' | 'l' | 'xl';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    /**
     * Тема кнопки. Отвечает за визуал (в рамке, без стилей, противоположный теме приложения цвет и тд)
     */
    variant?: ButtonVariant;
    /**
     * Флаг, делающий кнопку квадратной
     */
    square?: boolean;
    /**
     * Размер кнопки в соответствии с дизайн системой
     */
    size?: ButtonSize;
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
    /**
     * Доп. контент внутри кнопки слева
     */
    addonLeft?: ReactNode;
    /**
     * Доп. контент внутри кнопки справа
     */
    addonRight?: ReactNode;
}

export const Button = memo((props: ButtonProps) => {
    const {
        children,
        className,
        variant = 'outline',
        square,
        size = 'm',
        disabled,
        fullWidth,
        addonLeft,
        addonRight,
        ...otherProps
    } = props;

    const mods: Mods = {
        [cls.square]: square,
        [cls.disabled]: disabled,
        [cls.fullWidth]: fullWidth,
        [cls.withAddon]: Boolean(addonLeft) || Boolean(addonRight),
    };

    return (
        <button
            className={classNames(cls.Button, mods, [className, cls[variant], cls[size]])}
            disabled={disabled}
            {...otherProps}
        >
            {addonLeft && <div className={cls.addonLeft}>{addonLeft}</div>}
            {children}
            {addonRight && <div className={cls.addonRight}>{addonRight}</div>}
        </button>
    );
});
