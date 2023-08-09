import { ReactNode, useMemo, useState } from 'react';

import { useJsonSettings } from '@/entities/User';
import { ETheme } from '@/shared/consts/theme';
import { ThemeContext } from '@/shared/lib/context/ThemeContext';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';

export interface ThemeProviderProps {
    initialTheme?: ETheme;
    children: ReactNode;
}

const ThemeProvider = ({ children, initialTheme }: ThemeProviderProps) => {
    const { theme: defaultTheme } = useJsonSettings();

    const [theme, setTheme] = useState<ETheme>(initialTheme || defaultTheme || ETheme.LIGHT);

    const [isThemeInited, setIsThemeInited] = useState(false);

    useInitialEffect(() => {
        if (!isThemeInited && defaultTheme) {
            setTheme(defaultTheme);
            setIsThemeInited(true);
        }
    });

    const defaultProps = useMemo(() => ({ theme, setTheme }), [theme]);

    return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
