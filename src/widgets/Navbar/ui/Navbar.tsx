import { memo, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getUserAuthData } from '@/entities/User';
import { LoginModal } from '@/features/authByUsername';
import { AvatarDropdown } from '@/features/avatarDropdown';
import { NotificationButton } from '@/features/notificationButton';
import { getRouteArticleCreate } from '@/shared/consts/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures, toggleFeatures } from '@/shared/lib/features';
import { AppLink, EAppLinkTheme } from '@/shared/ui/deprecated/AppLink';
import { Button as ButtonDeprecated, EButtonTheme } from '@/shared/ui/deprecated/Button';
import { ETextTheme, Text } from '@/shared/ui/deprecated/Text';
import { Button } from '@/shared/ui/redesigned/Button';
import { HStack } from '@/shared/ui/redesigned/Stack';

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

    const mainClass = toggleFeatures({
        name: 'isAppRedesigned',
        on: () => cls.NavbarRedesigned,
        off: () => cls.Navbar,
    });

    if (authData) {
        return (
            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                    <header className={classNames(mainClass, {}, [className])}>
                        <HStack gap="16" className={cls.actions}>
                            <NotificationButton />
                            <AvatarDropdown />
                        </HStack>
                    </header>
                }
                off={
                    <header className={classNames(mainClass, {}, [className])}>
                        <Text
                            className={cls.appName}
                            theme={ETextTheme.INVERTED}
                            title={t('Fantastic blog')}
                        />
                        <AppLink
                            className={cls.createBtn}
                            theme={EAppLinkTheme.SECONDARY}
                            to={getRouteArticleCreate()}
                        >
                            {t('Create article')}
                        </AppLink>

                        <HStack gap="16" className={cls.actions}>
                            <NotificationButton />

                            <AvatarDropdown />
                        </HStack>
                    </header>
                }
            />
        );
    }

    return (
        <header className={classNames(mainClass, {}, [className])}>
            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                    <Button className={classNames(cls.links)} variant="clear" onClick={onShowModal}>
                        {t('Login')}
                    </Button>
                }
                off={
                    <ButtonDeprecated
                        className={classNames(cls.links)}
                        theme={EButtonTheme.CLEAR}
                        onClick={onShowModal}
                    >
                        {t('Login')}
                    </ButtonDeprecated>
                }
            />

            <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
        </header>
    );
});
