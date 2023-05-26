import { FC, useMemo, useState } from 'react';
import { ETheme, LOCAL_STORAGE_THEME_KEY, ThemeContext } from '../lib/ThemeContext';

export interface ThemeProviderProps {
    initialTheme?: ETheme;
}

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as ETheme) || ETheme.LIGHT;

const ThemeProvider: FC<ThemeProviderProps> = ({ children, initialTheme }) => {
    const [theme, setTheme] = useState<ETheme>(initialTheme || defaultTheme);

    const defaultProps = useMemo(() => ({ theme, setTheme }), [theme]);

    return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
