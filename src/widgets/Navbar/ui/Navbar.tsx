import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, EButtonTheme } from 'shared/ui/Button/Button';
import { memo, useEffect, useState } from 'react';
import { LoginModal } from 'features/authByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, isUserAdmin, isUserManager, userActions } from 'entities/User';
import { ETextTheme, Text } from 'shared/ui/Text/Text';
import { AppLink, EAppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Dropdown } from 'shared/ui/Dropdown/Dropdown';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import cls from './Navbar.module.scss';

export interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const authData = useSelector(getUserAuthData);
    const dispatch = useDispatch();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);
    const isAdminPanelAvailable = isAdmin || isManager;

    const onCloseModal = () => {
        setIsAuthModal(false);
    };

    const onShowModal = () => {
        setIsAuthModal(true);
    };

    const onLogout = () => {
        dispatch(userActions.logout());
        setIsAuthModal(false);
    };

    useEffect(() => {
        onCloseModal();
    }, []);

    if (authData) {
        return (
            <header className={classNames(cls.Navbar, {}, [className])}>
                <Text className={cls.appName} theme={ETextTheme.INVERTED} title={t('Production blog')} />
                <AppLink className={cls.createBtn} theme={EAppLinkTheme.SECONDARY} to={RoutePath.article_create}>
                    {t('Create article')}
                </AppLink>
                <Dropdown
                    className={cls.dropdown}
                    direction="bottom left"
                    items={[
                        ...(isAdminPanelAvailable
                            ? [
                                {
                                    content: t('AdminPanel'),
                                    href: RoutePath.admin_panel,
                                },
                            ]
                            : []),
                        {
                            content: t('Profile Page'),
                            href: RoutePath.profile + authData.id,
                        },
                        {
                            content: t('Logout'),
                            onClick: onLogout,
                        },
                    ]}
                    trigger={<Avatar size={30} src={authData.avatar} alt="avatar" />}
                />
            </header>
        );
    }

    return (
        <header className={classNames(cls.Navbar, {}, [className])}>
            <Button className={classNames(cls.links)} theme={EButtonTheme.CLEAR} onClick={onShowModal}>
                {t('Login')}
            </Button>
            <LoginModal isOpen={isAuthModal} onClose={onCloseModal} onOpen={onShowModal} />
        </header>
    );
});
