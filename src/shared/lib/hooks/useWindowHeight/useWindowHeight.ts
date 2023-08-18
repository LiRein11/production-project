import { useCallback, useEffect, useState } from 'react';

export function useWindowHeight() {
    const [windowHeightT, setWindowHeightT] = useState<boolean>(false);
    const windowHeight = document.documentElement.clientHeight;

    const handleScroll = useCallback(() => {
        const scrollTop = window.scrollY;
        if (scrollTop >= windowHeight) {
            setWindowHeightT(true);
        } else {
            setWindowHeightT(false);
        }
    }, [windowHeight]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll, windowHeight]);

    return windowHeightT;
}
