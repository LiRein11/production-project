import { useContext, useEffect } from 'react';
import { ETheme, LOCAL_STORAGE_THEME_KEY, ThemeContext } from './ThemeContext';

export interface IUseThemeResult {
    theme: ETheme;
    toggleTheme?: () => void;
}

export function useTheme(): IUseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        let newTheme: ETheme;
        switch (theme) {
        case ETheme.DARK:
            newTheme = ETheme.ORANGE;
            break;
        case ETheme.LIGHT:
            newTheme = ETheme.DARK;
            break;
        case ETheme.ORANGE:
            newTheme = ETheme.LIGHT;
            break;
        default:
            newTheme = ETheme.LIGHT;
        }
        setTheme?.(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
        // document.body.className = newTheme;
    };
    useEffect(() => {
        document.body.className = theme || '';
    }, [theme]);
    return {
        theme: theme || ETheme.LIGHT,
        toggleTheme,
    };
}
