import { memo, useCallback } from 'react';

import { saveJsonSettings } from '@/entities/User';
import DarkIcon from '@/shared/assets/icons/theme-dark.svg';
import LightIcon from '@/shared/assets/icons/theme-light.svg';
import { ETheme } from '@/shared/consts/theme';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { Button, EButtonTheme } from '@/shared/ui/Button';

export interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    const dispatch = useAppDispatch();

    const toggleHanler = useCallback(() => {
        toggleTheme?.((newTheme) => {
            dispatch(saveJsonSettings({ theme: newTheme }));
        });
    }, [dispatch, toggleTheme]);

    return (
        <Button
            theme={EButtonTheme.CLEAR}
            onClick={toggleHanler}
            className={classNames('', {}, [className])}
        >
            {theme === ETheme.LIGHT ? <LightIcon /> : <DarkIcon />}
        </Button>
    );
});
