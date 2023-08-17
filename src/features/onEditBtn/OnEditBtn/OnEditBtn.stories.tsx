import { ComponentStory, ComponentMeta } from '@storybook/react';

import { OnEditBtn } from './OnEditBtn';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
    title: 'shared/onEditBtn',
    component: OnEditBtn,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof OnEditBtn>;

const Template: ComponentStory<typeof OnEditBtn> = () => <OnEditBtn />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({})];
