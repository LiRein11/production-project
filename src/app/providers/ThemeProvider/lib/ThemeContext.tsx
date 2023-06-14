import { createContext } from 'react';

export const enum ETheme {
    DARK = 'app_dark_theme',
    LIGHT = 'app_light_theme',
    ORANGE = 'app_orange_theme',
}

export interface IThemeContextProps {
    theme?: ETheme;
    setTheme?: (theme: ETheme) => void;
}

export const ThemeContext = createContext<IThemeContextProps>({});

export const LOCAL_STORAGE_THEME_KEY = 'theme';
