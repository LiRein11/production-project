import { classNames } from 'shared/lib/classNames/classNames';
import React, { ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import { Portal } from '../Portal/Portal';
import cls from './Modal.module.scss';

export interface ModalProps {
    className?: string;
    children: ReactNode;
    lazy: boolean;
    isOpen: boolean;
    onClose: () => void;
    onOpen?: () => void;
}

const ANIMATION_DELAY = 300;

export const Modal = (props: ModalProps) => {
    const { className, children, isOpen, onOpen, onClose, lazy } = props;

    const [isClosing, setIsClosing] = useState(false);
    const [isOpening, setIsOpening] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    const timerRef = useRef<ReturnType<typeof setTimeout>>();

    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, ANIMATION_DELAY); // В случае демонтирования модалки из DOM дерева, таймаут может отработать и попытаться изменить состояние уже не существующего удалённого компонента и приложение упадет с ошибкой. Реф помогает избежать этой ошибки.
        }
    }, [onClose]);

    // const openHandler = useCallback(() => {
    //     if (onOpen) {
    //         setIsOpening(true);
    //         timerRef.current = setTimeout(() => {
    //             onOpen();
    //             setIsOpening(false);
    //         }, ANIMATION_DELAY);
    //     }
    // }, [onOpen]);

    const onKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                closeHandler();
            }
        },
        [closeHandler],
    ); // На каждый перерендер компонента создаётся новая фукнция со своей новой ссылкой, поэтому нужно как-то сохранять ссылку на эту функцию. useCallback запоминает и мемоизирует значение функции, и всегда её же возвращает (если в массиве зависимостей ничего не изменилось)

    const contentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    }; // Чтобы не было закрытия модалки при нажатии на неё.

    useEffect(() => {
        if (onOpen) {
            setIsOpening(true);
            timerRef.current = setTimeout(() => {
                // onOpen();
                setIsMounted(true);
                setIsOpening(false);
            }, ANIMATION_DELAY);
        }
        return () => {
            setIsMounted(false);
        };
    }, [isOpen, onOpen]);

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }

        return () => {
            clearInterval(timerRef.current);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]); // Все таймауты, таймеры, которые используются внутри компонента, асинхронные операции нужно очищать в useEffect. Для этого можно вернуть функцию, в которой и будет очистка.

    const mods: Record<string, boolean> = {
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
                <div className={cls.overlay} onClick={closeHandler}>
                    <div className={cls.content} onClick={contentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
