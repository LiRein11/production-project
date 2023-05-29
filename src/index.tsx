import { render } from 'react-dom';

import App from 'app/App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/providers/ThemeProvider';

import { Suspense } from 'react';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { StoreProvider } from 'app/providers/redux';
import './shared/config/i18n/i18n';
import 'app/styles/index.scss';

render(
    <StoreProvider>
        <BrowserRouter>
            <ThemeProvider>
                <ErrorBoundary>
                    <Suspense fallback="">
                        <App />
                    </Suspense>
                </ErrorBoundary>
            </ThemeProvider>
        </BrowserRouter>
    </StoreProvider>,

    document.getElementById('root'),
);
