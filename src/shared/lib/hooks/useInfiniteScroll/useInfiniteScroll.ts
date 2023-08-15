import { MutableRefObject, useEffect } from 'react';

export interface UseInfiniteScroll {
    callback?: () => void;
    triggerRef: MutableRefObject<HTMLElement>;
    wrapperRef?: MutableRefObject<HTMLElement>;
}

export function useInfiniteScroll({ callback, triggerRef, wrapperRef }: UseInfiniteScroll) {
    useEffect(() => {
        let observer: IntersectionObserver | null = null;
        const wrapperElement = wrapperRef?.current || null;
        const triggerElement = triggerRef.current;

        if (callback) {
            const options = {
                root: wrapperElement, // Внутри чего следим
                rootMargin: '0px',
                threshold: 1.0,
            };

            observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    callback();
                }
            }, options); // Что делаем при взаимодействии с рефом

            observer.observe(triggerElement); // То, зачем следим
        }

        return () => {
            if (observer && triggerElement) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                observer.unobserve(triggerElement); // На triggerRef ссылка меняться не будет, поэтому можно заигнорить
            }
        }; // Отписка от слежки во избежание утечек памяти
    }, [triggerRef, wrapperRef, callback]);
} // Браузерное api, которое позволяет следить за видимостью элементов. (callback будет вызываться при каждом взаимодействии с рефом)
