import { ReactNode, useMemo, useState } from 'react';
import { LOCAL_STORAGE_THEME_KEY } from '@/shared/consts/localstorage';
import { ETheme } from '@/shared/consts/theme';
import { ThemeContext } from '@/shared/lib/context/ThemeContext';

export interface ThemeProviderProps {
    initialTheme?: ETheme;
    children: ReactNode;
}
const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as ETheme) || ETheme.LIGHT;

const ThemeProvider = ({ children, initialTheme }: ThemeProviderProps) => {
    const [theme, setTheme] = useState<ETheme>(initialTheme || defaultTheme);

    const defaultProps = useMemo(() => ({ theme, setTheme }), [theme]);

    return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
