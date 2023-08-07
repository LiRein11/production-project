import { ReducersMapObject } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';

// eslint-disable-next-line sergey-plugin/layer-imports
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { StateSchema, StoreProvider } from '@/app/providers/redux';
import i18n from '@/shared/config/i18n/i18nForTest';
import { ETheme } from '@/shared/consts/theme';
// eslint-disable-next-line sergey-plugin/layer-imports
import '@/app/styles/index.scss';

export interface componentRenderOptions {
    route?: string;
    initialState?: DeepPartial<StateSchema>;
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
    theme?: ETheme;
}

export interface TestProviderProps {
    children: ReactNode;
    options?: componentRenderOptions;
}

export const TestProvider = (props: TestProviderProps) => {
    const { children, options = {} } = props;
    const { route = '/', initialState, asyncReducers, theme = ETheme.LIGHT } = options;

    return (
        <MemoryRouter initialEntries={[route]}>
            <StoreProvider asyncReducers={asyncReducers} initialState={initialState}>
                <I18nextProvider i18n={i18n}>
                    <ThemeProvider initialTheme={theme}>
                        <div className={`app ${theme}`}>{children}</div>
                    </ThemeProvider>
                </I18nextProvider>
            </StoreProvider>
        </MemoryRouter>
    );
};

export const componentRender = (component: ReactNode, options: componentRenderOptions = {}) => {
    return render(<TestProvider options={options}>{component}</TestProvider>);
}; // Helper для тестов(для роутинга и i18n)
