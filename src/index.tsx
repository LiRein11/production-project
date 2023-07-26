import { BrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import App from '@/app/App';
import { ThemeProvider } from '@/app/providers/ThemeProvider';

import { ErrorBoundary } from '@/app/providers/ErrorBoundary';
import { StoreProvider } from '@/app/providers/redux';
import './shared/config/i18n/i18n';
import '@/app/styles/index.scss';

const container = document.getElementById('root');

if (!container) {
    throw new Error('Контейнер root отсутствует. Не удалось вмонтировать react приложение');
}

const root = createRoot(container);

root.render(
    <BrowserRouter>
        <StoreProvider>
            <ThemeProvider>
                <ErrorBoundary>
                    <Suspense fallback="">
                        <App />
                    </Suspense>
                </ErrorBoundary>
            </ThemeProvider>
        </StoreProvider>
    </BrowserRouter>,
);
