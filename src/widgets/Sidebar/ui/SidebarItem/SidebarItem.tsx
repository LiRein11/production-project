import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { SidebarItemType } from '../../model/types/sidebar';

import { getUserAuthData } from '@/entities/User';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink, EAppLinkTheme } from '@/shared/ui/AppLink';

import cls from './SidebarItem.module.scss';

export interface SidebarItemProps {
    item: SidebarItemType;
    collapsed: boolean;
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
    const { t } = useTranslation();

    const isAuth = useSelector(getUserAuthData);

    if (item.authOnly && !isAuth) {
        return null;
    }

    return (
        <AppLink to={item.path} theme={EAppLinkTheme.PRIMARY} className={classNames(cls.item, { [cls.collapsed]: collapsed })}>
            <item.Icon className={cls.icon} />
            <span className={classNames(cls.link)}>{t(item.text)}</span>
        </AppLink>
    );
});
