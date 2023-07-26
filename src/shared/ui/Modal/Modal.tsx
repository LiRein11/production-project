import { ReactNode } from 'react';
import { Mods, classNames } from '@/shared/lib/classNames/classNames';
import { useModal } from '@/shared/lib/hooks/useModal/useModal';
import { Overlay } from '../Overlay/Overlay';
import { Portal } from '../Portal/Portal';
import cls from './Modal.module.scss';

export interface ModalProps {
    className?: string;
    children: ReactNode;
    lazy: boolean;
    isOpen: boolean;
    onClose: () => void;
}

const ANIMATION_DELAY = 300;

export const Modal = (props: ModalProps) => {
    const { className, children, isOpen, onClose, lazy } = props;

    // const contentClick = (e: React.MouseEvent) => {
    //     e.stopPropagation();
    // }; // Чтобы не было закрытия модалки при нажатии на неё. (перестает быть нужным с приходом Overlay)

    const { isClosing, isOpening, isMounted, close } = useModal({ animationDelay: ANIMATION_DELAY, onClose, isOpen });

    const mods: Mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
        [cls.isOpening]: isOpening,
    };

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className])}>
                <Overlay className={cls.overlay} onClick={close} />
                <div className={cls.content}>{children}</div>
            </div>
        </Portal>
    );
};
