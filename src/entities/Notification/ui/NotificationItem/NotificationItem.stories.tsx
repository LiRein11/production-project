import { ComponentStory, ComponentMeta } from '@storybook/react';

import { NotificationItem } from './NotificationItem';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { ETheme } from '@/shared/consts/theme';

export default {
    title: 'entities/Notification/NotificationItem',
    component: NotificationItem,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof NotificationItem>;

const Template: ComponentStory<typeof NotificationItem> = (args) => <NotificationItem {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    item: {
        id: '1',
        title: 'Уведомление 1',
        description: 'Произошло что-то',
        userId: '1',
    },
};
Normal.decorators = [StoreDecorator({})];

export const Dark = Template.bind({});
Dark.args = {
    item: {
        id: '1',
        title: 'Уведомление 1',
        description: 'Произошло что-то',
        userId: '1',
    },
};
Dark.decorators = [StoreDecorator({}), ThemeDecorator(ETheme.DARK)];
