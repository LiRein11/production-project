import { useState, useRef, MutableRefObject, useCallback, useEffect } from 'react';

export interface useModalProps {
    onClose?: () => void;
    animationDelay: number;
    isOpen?: boolean;
}

export const useModal = (props: useModalProps) => {
    const { onClose, animationDelay, isOpen } = props;

    const [isClosing, setIsClosing] = useState(false);
    const [isOpening, setIsOpening] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;

    const close = useCallback(() => {
        if (onClose) {
            setIsClosing(true);

            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, animationDelay); // В случае демонтирования модалки из DOM дерева, таймаут может отработать и попытаться изменить состояние уже не существующего удалённого компонента и приложение упадет с ошибкой. Реф помогает избежать этой ошибки.
        }
    }, [onClose, animationDelay]);

    const onKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                close();
            }
        },
        [close],
    ); // На каждый перерендер компонента создаётся новая фукнция со своей новой ссылкой, поэтому нужно как-то сохранять ссылку на эту функцию. useCallback запоминает и мемоизирует значение функции, и всегда её же возвращает (если в массиве зависимостей ничего не изменилось)

    useEffect(() => {
        if (isOpen) {
            setIsOpening(true);
            setIsMounted(true);
            timerRef.current = setTimeout(() => {
                // onOpen();
                setIsOpening(false);
            }, 0);
        }
        return () => {
            setIsMounted(false);
            clearInterval(timerRef.current);
        };
    }, [isOpen]);

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }

        return () => {
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]); // Все таймауты, таймеры, которые используются внутри компонента, асинхронные операции нужно очищать в useEffect. Для этого можно вернуть функцию, в которой и будет очистка.

    return {
        isClosing,
        isOpening,
        isMounted,
        close,
    };
};
