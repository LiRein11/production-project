import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';

import AboutIcon from '@/shared/assets/icons/about-20-20.svg';
import MainIcon from '@/shared/assets/icons/main-20-20.svg';
import ArticleIcon from '@/shared/assets/icons/article-20-20.svg';
import ProfileIcon from '@/shared/assets/icons/profile-20-20.svg';

import { SidebarItemType } from '../types/sidebar';
import { RoutePath } from '@/shared/consts/router';

export const getSidebarItems = createSelector(getUserAuthData, (authData) => {
    const sidebarItemsList: SidebarItemType[] = [
        {
            path: RoutePath.main,
            text: 'Главная',
            Icon: MainIcon,
        },
        {
            path: RoutePath.about,
            text: 'О сайте',
            Icon: AboutIcon,
        },
    ];

    if (authData) {
        sidebarItemsList.push(
            {
                path: `${RoutePath.profile}${authData?.id}`,
                text: 'Profile Page',
                Icon: ProfileIcon,
                authOnly: true,
            },
            {
                path: RoutePath.articles,
                text: 'ArticlesPage',
                Icon: ArticleIcon,
                authOnly: true,
            },
        );
    }
    return sidebarItemsList;
});
