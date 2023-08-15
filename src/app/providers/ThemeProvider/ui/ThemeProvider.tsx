import { ReactNode, useEffect, useMemo, useState } from 'react';

import { useJsonSettings } from '@/entities/User';
import { ETheme } from '@/shared/consts/theme';
import { ThemeContext } from '@/shared/lib/context/ThemeContext';

export interface ThemeProviderProps {
    initialTheme?: ETheme;
    children: ReactNode;
}

const ThemeProvider = ({ children, initialTheme }: ThemeProviderProps) => {
    const { theme: defaultTheme } = useJsonSettings();

    const [theme, setTheme] = useState<ETheme>(defaultTheme || initialTheme || ETheme.LIGHT);
    const [isThemeInited, setIsThemeInited] = useState(false);

    useEffect(() => {
        if (!isThemeInited && defaultTheme) {
            setTheme(defaultTheme);
            setIsThemeInited(true);
        }
    }, [defaultTheme, isThemeInited]);

    const defaultProps = useMemo(() => ({ theme, setTheme }), [theme]);

    return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
