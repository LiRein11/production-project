import { useContext, useEffect } from 'react';
import { ETheme, LOCAL_STORAGE_THEME_KEY, ThemeContext } from './ThemeContext';

export interface IUseThemeResult {
    theme: ETheme;
    toggleTheme?: () => void;
}

export function useTheme(): IUseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        const newTheme = theme === ETheme.LIGHT ? ETheme.DARK : ETheme.LIGHT;
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
        // document.body.className = newTheme;
    };
    useEffect(() => {
        document.body.className = theme;
    }, [theme]);
    return {
        theme,
        toggleTheme,
    };
}
