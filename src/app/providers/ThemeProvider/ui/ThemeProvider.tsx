import { ReactNode, useEffect, useMemo, useState } from 'react';

import { LOCAL_STORAGE_THEME_KEY } from '@/shared/consts/localstorage';
import { ETheme } from '@/shared/consts/theme';
import { ThemeContext } from '@/shared/lib/context/ThemeContext';

export interface ThemeProviderProps {
    initialTheme?: ETheme;
    children: ReactNode;
}

const fallbackTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as ETheme;

const ThemeProvider = ({ children, initialTheme }: ThemeProviderProps) => {
    const [theme, setTheme] = useState<ETheme>(fallbackTheme || initialTheme || ETheme.LIGHT);
    const [isThemeInited, setIsThemeInited] = useState(false);

    useEffect(() => {
        if (!isThemeInited && initialTheme) {
            setTheme(initialTheme);
            setIsThemeInited(true);
        }
    }, [initialTheme, isThemeInited]);

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
    }, [theme]);

    const defaultProps = useMemo(() => ({ theme, setTheme }), [theme]);

    return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
