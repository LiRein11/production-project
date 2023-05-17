import { render } from 'react-dom';
import App from './app/App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/providers/ThemeProvider';

import './shared/config/i18n/i18n';
import { Suspense } from 'react';

render(
  <BrowserRouter>
    <ThemeProvider>
      <Suspense fallback=''>
        <App />
      </Suspense> // Для i18n
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
