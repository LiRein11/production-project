import { createContext } from 'react';

export const enum ETheme {
  DARK = 'dark',
  LIGHT = 'light',
}

export interface IThemeContextProps {
  theme?: ETheme;
  setTheme?: (theme: ETheme) => void;
}

export const ThemeContext = createContext<IThemeContextProps>({});

export const LOCAL_STORAGE_THEME_KEY = 'theme';
