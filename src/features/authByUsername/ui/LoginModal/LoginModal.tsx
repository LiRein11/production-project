import { Modal } from 'shared/ui/Modal/Modal';
import { Suspense } from 'react';
import { Loader } from 'shared/ui/Loader/Loader';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';

export interface LoginModalProps {
    isOpen: boolean;
    onClose: () => void;
    onOpen?: () => void;
}

export const LoginModal = (props: LoginModalProps) => {
    const { isOpen, onClose, onOpen } = props;

    return (
        <Modal lazy isOpen={isOpen} onClose={onClose} onOpen={onOpen}>
            <Suspense fallback={<Loader />}>
                <LoginFormAsync />
            </Suspense>
        </Modal>
    );
};
