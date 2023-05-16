import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ThemeSwither.module.scss';
import { ETheme, useTheme } from 'app/providers/ThemeProvider';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

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
      className={classNames(cls.ThemeSwither, {}, [className])}>
      {ETheme.DARK === theme ? <DarkIcon /> : <LightIcon />}
    </Button>
  );
};
