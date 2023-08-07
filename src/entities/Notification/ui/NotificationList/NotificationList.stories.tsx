import { ComponentStory, ComponentMeta } from '@storybook/react';
import withMock from 'storybook-addon-mock';

import { NotificationList } from './NotificationList';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { ETheme } from '@/shared/consts/theme';

export default {
    title: 'entities/Notification/NotificationList',
    component: NotificationList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [withMock],
} as ComponentMeta<typeof NotificationList>;

const Template: ComponentStory<typeof NotificationList> = (args) => <NotificationList {...args} />;

const notifications = [
    {
        id: '1',
        title: 'Уведомление 1',
        description: 'Произошло что-то',
        userId: '1',
    },
    {
        id: '2',
        title: 'Уведомление 2',
        description: 'Произошло что-то',
        userId: '1',
        href: 'http://localhost:3000/admin',
    },
    {
        id: '3',
        title: 'Уведомление 3',
        description: 'Произошло что-то',
        userId: '1',
    },
];

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({})];
Normal.parameters = {
    mockData: [
        {
            url: `${__API__}/notifications`,
            method: 'GET',
            status: 200,
            response: notifications,
        },
    ],
};

export const NormalLoading = Template.bind({});
NormalLoading.args = {};
NormalLoading.decorators = [StoreDecorator({})];
NormalLoading.parameters = {
    mockData: [
        {
            url: `${__API__}/notifications`,
            method: 'GET',
            status: 200,
            delay: 10000,
        },
    ],
};

export const NormalDark = Template.bind({});
NormalDark.args = {};
NormalDark.decorators = [StoreDecorator({}), ThemeDecorator(ETheme.DARK)];
NormalDark.parameters = {
    mockData: [
        {
            url: `${__API__}/notifications`,
            method: 'GET',
            status: 200,
            response: notifications,
        },
    ],
};

export const NormalLoadingDark = Template.bind({});
NormalLoadingDark.args = {};
NormalLoadingDark.decorators = [StoreDecorator({}), ThemeDecorator(ETheme.DARK)];
NormalLoadingDark.parameters = {
    mockData: [
        {
            url: `${__API__}/notifications`,
            method: 'GET',
            status: 200,
            delay: 10000,
        },
    ],
};
