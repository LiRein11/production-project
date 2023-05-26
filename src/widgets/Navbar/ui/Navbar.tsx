import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { Modal } from 'shared/ui/Modal/Modal';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useState } from 'react';
import cls from './Navbar.module.scss';

export interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();

    const [isAuthModal, setIsAuthModal] = useState(false);

    const onToggleModal = () => {
        setIsAuthModal((prev) => !prev);
    };

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                className={classNames(cls.links)}
                theme={ButtonTheme.CLEAR}
                onClick={onToggleModal}
            >
                {t('Login')}
            </Button>
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse rem cumque ea
                blanditiis delectus eum exercitationem omnis ex enim, cupiditate laudantium itaque
                porro fuga dolor! Itaque quod enim hic quibusdam.
            </Modal>
        </div>
    );
};
