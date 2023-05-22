import { Story } from '@storybook/react';
import { ETheme } from 'app/providers/ThemeProvider';
import 'app/styles/index.scss';

export const ThemeDecorator = (theme: ETheme) => (Story: Story) =>
    (
        <div className={`app ${theme}`}>
            <Story />
        </div>
    );
