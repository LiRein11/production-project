import { createContext } from 'react';
import { ETheme } from '../../consts/theme';

export interface ThemeContextProps {
    theme?: ETheme;
    setTheme?: (theme: ETheme) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({});
