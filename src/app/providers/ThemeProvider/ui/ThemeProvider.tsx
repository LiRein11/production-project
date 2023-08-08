import { ReactNode, useEffect, useMemo, useState } from 'react';

import { useJsonSettings } from '@/entities/User';
import { ETheme } from '@/shared/consts/theme';
import { ThemeContext } from '@/shared/lib/context/ThemeContext';

export interface ThemeProviderProps {
    initialTheme?: ETheme;
    children: ReactNode;
}

const ThemeProvider = ({ children, initialTheme }: ThemeProviderProps) => {
    const { theme: defaultTheme = ETheme.LIGHT } = useJsonSettings();

    const [theme, setTheme] = useState<ETheme>(initialTheme || defaultTheme);

    const [isThemeInited, setIsThemeInited] = useState(false);

    const defaultProps = useMemo(() => ({ theme, setTheme }), [theme]);

    useEffect(() => {
        if (!isThemeInited) {
            setTheme(defaultTheme);
            setIsThemeInited(true);
        }
    }, [defaultTheme, isThemeInited]);

    return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
