import { createSelector } from '@reduxjs/toolkit';

import { SidebarItemType } from '../types/sidebar';

import { getUserAuthData } from '@/entities/User';
import AboutIcon from '@/shared/assets/icons/about-20-20.svg';
import ArticleIcon from '@/shared/assets/icons/article-20-20.svg';
import MainIcon from '@/shared/assets/icons/main-20-20.svg';
import ProfileIcon from '@/shared/assets/icons/profile-20-20.svg';
import {
    getRouteAbout,
    getRouteArticles,
    getRouteMain,
    getRouteProfile,
} from '@/shared/consts/router';

export const getSidebarItems = createSelector(getUserAuthData, (authData) => {
    const sidebarItemsList: SidebarItemType[] = [
        {
            path: getRouteMain(),
            text: 'Главная',
            Icon: MainIcon,
        },
        {
            path: getRouteAbout(),
            text: 'О сайте',
            Icon: AboutIcon,
        },
    ];

    if (authData) {
        sidebarItemsList.push(
            {
                path: getRouteProfile(authData?.id),
                text: 'Profile Page',
                Icon: ProfileIcon,
                authOnly: true,
            },
            {
                path: getRouteArticles(),
                text: 'ArticlesPage',
                Icon: ArticleIcon,
                authOnly: true,
            },
        );
    }
    return sidebarItemsList;
});
