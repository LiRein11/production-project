import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { Button, ButtonSize, EButtonTheme } from 'shared/ui/Button/Button';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import AboutIcon from 'shared/assets/icons/about.svg';
import MainIcon from 'shared/assets/icons/main.svg';

import cls from './Sidebar.module.scss';

export interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const { t } = useTranslation();
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
            <Button
                data-testid="sidebar-btn"
                onClick={onToggle}
                className={cls.collapseBtn}
                theme={EButtonTheme.BACKGROUND_INVERTED}
                square
                size={ButtonSize.L}
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={cls.items}>
                <AppLink to={RoutePath.main} theme={AppLinkTheme.PRIMARY}>
                    <div className={cls.item}>
                        <MainIcon className={cls.icon} />
                        <span className={classNames(cls.link)}>{t('Главная')}</span>
                    </div>
                </AppLink>
                <AppLink to={RoutePath.about} theme={AppLinkTheme.PRIMARY}>
                    <div className={cls.item}>
                        <AboutIcon className={cls.icon} />
                        <span className={classNames(cls.link)}>{t('О сайте')}</span>
                    </div>
                </AppLink>
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} short={collapsed} />
            </div>
        </div>
    );
};
