/* eslint-disable i18next/no-literal-string */
import { useCallback, useState, memo } from 'react';
import { getUserAuthData } from '@/entities/User';
import { LoginModal } from '@/features/AuthByUsername';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { Text, TextTheme } from '@/shared/ui/deprecated/Text';
import { AppLink, AppLinkTheme } from '@/shared/ui/deprecated/AppLink';
import { getRouteArticleCreate } from '@/shared/const/router';
import { HStack } from '@/shared/ui/deprecated/Stack';
import { NotificationButton } from '@/features/NotificationButton';
import { AvatarDropdown } from '@/features/AvatarDropdown';
import cls from './Navbar.module.scss';
import { ToggleFeatures } from '@/shared/lib/features';

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const authData = useSelector(getUserAuthData);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    if (authData) {
        return (
            <ToggleFeatures 
                feature='isAppRedesigned' 
                off={
                    <header className={classNames(cls.navbar, {}, [className])}>
                        <Text
                            className={cls.appName}
                            title={t('Blog')}
                            theme={TextTheme.INVERTED}
                        />
                        <AppLink
                            to={getRouteArticleCreate()}
                            theme={AppLinkTheme.SECONDARY}
                            className={cls.createBtn}
                        >
                            {t('Create article')}
                        </AppLink>

                        <HStack gap='16' className={cls.actions}>
                            <NotificationButton />
                            <AvatarDropdown />
                        </HStack>
                    </header>
                }  
                on={
                    <header className={classNames(cls.navbarRedesigned, {}, [className])}>
                        <HStack gap='16' className={cls.actions}>
                            <NotificationButton />
                            <AvatarDropdown />
                        </HStack>
                    </header>
                }
            />
        );
    }

    return (
        <header className={classNames(cls.navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls.links}
                onClick={onShowModal}
            >
                {t('Log in')}
            </Button>
            {isAuthModal && (
                <LoginModal isOpen={isAuthModal} isClose={onCloseModal} />
            )}
        </header>
    );
});
