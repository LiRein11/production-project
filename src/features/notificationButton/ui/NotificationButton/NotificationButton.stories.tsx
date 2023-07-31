import { ComponentStory, ComponentMeta } from '@storybook/react';

import { NotificationButton } from './NotificationButton';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { HStack } from '@/shared/ui/Stack';

export default {
    title: 'features/NotificationButton',
    component: NotificationButton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof NotificationButton>;

const Template: ComponentStory<typeof NotificationButton> = (args) => (
    <HStack max justify="end">
        <NotificationButton {...args} />
    </HStack>
);

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({})];
