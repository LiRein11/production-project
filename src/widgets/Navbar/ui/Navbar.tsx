import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, EButtonTheme } from 'shared/ui/Button/Button';
import { memo, useEffect, useState } from 'react';
import { LoginModal } from 'features/authByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import cls from './Navbar.module.scss';

export interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const authData = useSelector(getUserAuthData);
    const dispatch = useDispatch();
    const [isAuthModal, setIsAuthModal] = useState(false);
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
            <div className={classNames(cls.Navbar, {}, [className])}>
                <Button
                    className={classNames(cls.links)}
                    theme={EButtonTheme.CLEAR}
                    onClick={onLogout}
                >
                    {t('Logout')}
                </Button>
                {/* <LoginModal isOpen={isAuthModal} onClose={onCloseModal} onOpen={onShowModal} /> */}
            </div>
        );
    }

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                className={classNames(cls.links)}
                theme={EButtonTheme.CLEAR}
                onClick={onShowModal}
            >
                {t('Login')}
            </Button>
            <LoginModal isOpen={isAuthModal} onClose={onCloseModal} onOpen={onShowModal} />
        </div>
    );
});
