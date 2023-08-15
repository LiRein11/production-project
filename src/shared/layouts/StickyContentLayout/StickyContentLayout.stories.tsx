import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StickyContentLayout } from './StickyContentLayout';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
    title: 'shared/StickyContentLayout',
    component: StickyContentLayout,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    parameters: {
        loki: {
            skip: true,
        },
    },
} as ComponentMeta<typeof StickyContentLayout>;

const Template: ComponentStory<typeof StickyContentLayout> = (args) => (
    <StickyContentLayout {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({})];
