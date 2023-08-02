import { addDecorator } from '@storybook/react';

import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import { SuspenseDecorator } from '../../src/shared/config/storybook/SuspenseDecorator/SuspenseDecorator';
import { ETheme } from '@/shared/consts/theme';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    layout: 'fullscreen',
    themes: {
        default: 'light',
        list: [
            { name: 'light', class: ['app', ETheme.LIGHT], color: '#ffffff' },
            { name: 'dark', class: ['app', ETheme.DARK], color: '#000000' },
            { name: 'orange', class: ['app', ETheme.ORANGE], color: '#ffb005' },
        ],
    },
};

addDecorator(StyleDecorator);
addDecorator(SuspenseDecorator);
// addDecorator(ThemeDecorator(ETheme.LIGHT));
addDecorator(RouterDecorator);
