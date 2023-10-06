import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useDispatch, useSelector } from 'react-redux';
import { Dropdown as DropdownDeprecated } from '@/shared/ui/deprecated/Popups';
import {
    getUserAuthData,
    isUserAdmin,
    isUserManager,
    userAction,
} from '@/entities/User';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import { getRouteAdmin, getRouteProfile, getRouteSettings } from '@/shared/const/router';
import { ToggleFeatures } from '@/shared/lib/features';
import { Dropdown } from '@/shared/ui/redesigned/Popups'
import { Avatar } from '@/shared/ui/redesigned/Avatar'

interface AvatarDropdownProps {
  className?: string;
}

export const AvatarDropdown = memo((props: AvatarDropdownProps) => {
    const { className } = props;
    const { t, i18n } = useTranslation();
    const authData = useSelector(getUserAuthData);

    // for logout
    const dispatch = useDispatch();

    // for admin panel
    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);

    // for logout
    const onLogout = useCallback(() => {
        dispatch(userAction.logout());
    }, [dispatch]);

    const isAdminPanelAvailable = isAdmin || isManager;

    if (!authData) {
        return null;
    }

    const items = [
        ...(isAdminPanelAvailable
            ? [
                {
                    content: t('Admin Panel'),
                    href: getRouteAdmin(),
                },
            ]
            : []),
        {
            content: t('Settings'),
            href: getRouteSettings(),
        },
        {
            content: t('Profile'),
            href: getRouteProfile(authData.id),
        },
        {
            content: t('Log out'),
            onClick: onLogout,
        },
    ]

    return (
        <ToggleFeatures 
            feature='isAppRedesigned' 
            on={
                <Dropdown
                    className={classNames('', {}, [className])}
                    direction={'bottom left'}
                    items={items}
                    trigger={<Avatar size={40} src={authData.avatar} />}
                />
            } 
            off={
                <DropdownDeprecated
                    className={classNames('', {}, [className])}
                    direction={'bottom left'}
                    items={items}
                    trigger={<AvatarDeprecated fallbackInverted size={30} src={authData.avatar} />}
                />
            }
        />
    );
});

export default AvatarDropdown;
