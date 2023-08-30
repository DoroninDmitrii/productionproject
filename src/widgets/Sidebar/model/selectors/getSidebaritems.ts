import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import { SidebarItemType } from '../types/sidebar';
import {
    getRouteAbout,
    getRouteMain,
    getRouteProfile,
    getRouteArticles,
} from '@/shared/const/router';
import AboutIconDeprecated from '@/shared/assets/icons/about-20-20.svg';
import MainIconDeprecated from '@/shared/assets/icons/main-20-20.svg';
import ProfileIconDeprecated from '@/shared/assets/icons/profile-20-20.svg';
import ArticleIconDeprecated from '@/shared/assets/icons/article-20-20.svg';

import AboutIcon from '@/shared/assets/icons/Info.svg';
import MainIcon from '@/shared/assets/icons/home.svg';
import ProfileIcon from '@/shared/assets/icons/avatar.svg';
import ArticleIcon from '@/shared/assets/icons/article.svg';
import { toogleFeatures } from '@/shared/lib/features';


export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
    const sidebarItemsList: SidebarItemType[] = [
        {
            path: getRouteMain(),
            text: 'Main',
            Icon: toogleFeatures({
                name: 'isAppRedesigned',
                off: () => MainIconDeprecated,
                on: () => MainIcon,
            }),
        },
        {
            path: getRouteAbout(),
            text: 'About',
            Icon: toogleFeatures({
                name: 'isAppRedesigned',
                off: () => AboutIconDeprecated,
                on: () => AboutIcon,
            }),
        },
    ];

    if (userData) {
        sidebarItemsList.push(
            {
                path: getRouteProfile(userData.id),
                text: 'Profile',
                Icon: toogleFeatures({
                    name: 'isAppRedesigned',
                    off: () => ProfileIconDeprecated,
                    on: () => ProfileIcon,
                }),
                authOnly: true,
            },
            {
                path: getRouteArticles(),
                text: 'Article',
                Icon: toogleFeatures({
                    name: 'isAppRedesigned',
                    off: () => ArticleIconDeprecated,
                    on: () => ArticleIcon,
                }),
                authOnly: true,
            },
        );
    }
    return sidebarItemsList;
});
