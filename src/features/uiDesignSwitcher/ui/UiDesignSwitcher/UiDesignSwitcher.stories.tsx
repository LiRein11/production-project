import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { UiDesignSwitcher } from './UiDesignSwitcher';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
    title: 'features/UiDesignSwitcher',
    component: UiDesignSwitcher,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof UiDesignSwitcher>;

const Template: ComponentStory<typeof UiDesignSwitcher> = (args) => <UiDesignSwitcher {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({})];
