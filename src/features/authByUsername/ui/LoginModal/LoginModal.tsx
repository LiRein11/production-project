import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginForm } from '../LoginForm/LoginForm';

export interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
    onOpen?: () => void;
}

export const LoginModal = (props: LoginModalProps) => {
    const { isOpen, onClose, className, onOpen } = props;
    const { t } = useTranslation();

    return (
        <Modal lazy isOpen={isOpen} onClose={onClose} onOpen={onOpen}>
            <LoginForm />
        </Modal>
    );
};
