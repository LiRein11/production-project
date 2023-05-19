import { classNames } from 'shared/lib/classNames/classNames';
import { ETheme, useTheme } from 'app/providers/ThemeProvider';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import cls from './ThemeSwither.module.scss';

// export enum ThemeButton={

// }

export interface ThemeSwitherProps {
    className?: string;
}

export const ThemeSwither = ({ className }: ThemeSwitherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            theme={ThemeButton.CLEAR}
            onClick={toggleTheme}
            className={classNames('', {}, [className])}
        >
            {ETheme.DARK === theme ? <DarkIcon /> : <LightIcon />}
        </Button>
    );
};
