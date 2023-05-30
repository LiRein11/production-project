import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useState } from 'react';
import { LoginModal } from 'features/authByUsername';
import cls from './Navbar.module.scss';

export interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();

    const [isAuthModal, setIsAuthModal] = useState(false);

    const onCloseModal = () => {
        setIsAuthModal(false);
    };

    const onShowModal = () => {
        setIsAuthModal(true);
    };

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                className={classNames(cls.links)}
                theme={ButtonTheme.CLEAR}
                onClick={onShowModal}
            >
                {t('Login')}
            </Button>
            <LoginModal isOpen={isAuthModal} onClose={onCloseModal} onOpen={onShowModal} />
        </div>
    );
};
