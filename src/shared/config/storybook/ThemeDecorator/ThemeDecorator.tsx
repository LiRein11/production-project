import { Story } from '@storybook/react';
import { ETheme, ThemeProvider } from 'app/providers/ThemeProvider';
import 'app/styles/index.scss';

export const ThemeDecorator = (theme: ETheme) => (Story: Story) =>
    (
        <ThemeProvider initialTheme={theme}>
            <div className={`app ${theme}`}>
                <Story />
            </div>
        </ThemeProvider>
    );
