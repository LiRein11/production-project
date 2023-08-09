import { Story } from '@storybook/react';

// eslint-disable-next-line
import '@/app/styles/index.scss';
// eslint-disable-next-line
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { ETheme } from '@/shared/consts/theme';

export const ThemeDecorator = (theme: ETheme) => (Story: Story) =>
    (
        // <ThemeProvider initialTheme={theme}>
        <div className={`app ${theme}`}>
            <Story />
        </div>
        // </ThemeProvider>
    );
