import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';

import i18n from '@/shared/config/i18n/i18nForTest';

export const renderWithTranslation = (component: ReactNode) => {
    return render(<I18nextProvider i18n={i18n}>{component}</I18nextProvider>);
}; // Helper для тестов(для i18n)
