import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

import LightIcon from '@/shared/assets/icons/theme-light.svg';
import DarkIcon from '@/shared/assets/icons/theme-dark.svg';
import { Button, EButtonTheme } from '@/shared/ui/Button/Button';

import { ETheme } from '@/shared/consts/theme';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';

export interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button theme={EButtonTheme.CLEAR} onClick={toggleTheme} className={classNames('', {}, [className])}>
            {theme === ETheme.LIGHT ? <LightIcon /> : <DarkIcon />}
        </Button>
    );
});
