import { Link } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { ThemeSwither } from 'widgets/ThemeSwitcher';

export interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={classNames(cls.links)}>
        <AppLink className={classNames(cls.mainLink)} to={'/'}>
          Главная
        </AppLink>
        <AppLink to='/about'>О сайте</AppLink>
      </div>
    </div>
  );
};
