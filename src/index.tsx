import { render } from 'react-dom';

import App from 'app/App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/providers/ThemeProvider';

import './shared/config/i18n/i18n';
import { Suspense } from 'react';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import 'app/styles/index.scss';

render(
    <BrowserRouter>
        <ThemeProvider>
            <ErrorBoundary>
                <Suspense fallback="">
                    <App />
                </Suspense>
            </ErrorBoundary>
        </ThemeProvider>
    </BrowserRouter>,
    document.getElementById('root'),
);
