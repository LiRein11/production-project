import { addDecorator } from '@storybook/react';
import { ETheme } from 'app/providers/ThemeProvider';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};

addDecorator(StyleDecorator);
addDecorator(ThemeDecorator(ETheme.LIGHT));
addDecorator(RouterDecorator);
