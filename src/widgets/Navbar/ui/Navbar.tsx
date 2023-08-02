import { memo, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getUserAuthData } from '@/entities/User';
import { LoginModal } from '@/features/authByUsername';
import { AvatarDropdown } from '@/features/avatarDropdown';
import { NotificationButton } from '@/features/notificationButton';
import { getRouteArticleCreate } from '@/shared/consts/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink, EAppLinkTheme } from '@/shared/ui/AppLink';
import { Button, EButtonTheme } from '@/shared/ui/Button';
import { HStack } from '@/shared/ui/Stack';
import { ETextTheme, Text } from '@/shared/ui/Text';

import cls from './Navbar.module.scss';

export interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const authData = useSelector(getUserAuthData);
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onCloseModal = () => {
        setIsAuthModal(false);
    };

    const onShowModal = () => {
        setIsAuthModal(true);
    };

    useEffect(() => {
        onCloseModal();
    }, []);

    if (authData) {
        return (
            <header className={classNames(cls.Navbar, {}, [className])}>
                <Text className={cls.appName} theme={ETextTheme.INVERTED} title={t('Fantastic blog')} />
                <AppLink className={cls.createBtn} theme={EAppLinkTheme.SECONDARY} to={getRouteArticleCreate()}>
                    {t('Create article')}
                </AppLink>

                <HStack gap="16" className={cls.actions}>
                    <NotificationButton />

                    <AvatarDropdown />
                </HStack>
            </header>
        );
    }

    return (
        <header className={classNames(cls.Navbar, {}, [className])}>
            <Button className={classNames(cls.links)} theme={EButtonTheme.CLEAR} onClick={onShowModal}>
                {t('Login')}
            </Button>
            <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
        </header>
    );
});
