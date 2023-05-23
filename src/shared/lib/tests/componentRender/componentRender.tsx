import { I18nextProvider } from 'react-i18next';
import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import i18n from 'shared/config/i18n/i18nForTest';
import { MemoryRouter } from 'react-router-dom';

export interface componentRenderOptions {
    route?: string;
}

export const componentRender = (component: ReactNode, options: componentRenderOptions = {}) => {
    const { route = '/' } = options;

    return render(
        <MemoryRouter initialEntries={[route]}>
            <I18nextProvider i18n={i18n}>{component}</I18nextProvider>
        </MemoryRouter>,
    );
}; // Helper для тестов(для роутинга и i18n)
