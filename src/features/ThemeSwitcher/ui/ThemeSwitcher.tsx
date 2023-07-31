import { memo } from 'react';

import DarkIcon from '@/shared/assets/icons/theme-dark.svg';
import LightIcon from '@/shared/assets/icons/theme-light.svg';
import { ETheme } from '@/shared/consts/theme';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { Button, EButtonTheme } from '@/shared/ui/Button';

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
