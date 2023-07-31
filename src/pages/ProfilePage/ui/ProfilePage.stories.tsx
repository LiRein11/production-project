import { ComponentMeta, ComponentStory } from '@storybook/react';

import ProfilePage from './ProfilePage';

import { ECountry } from '@/entities/Country';
import { ECurrency } from '@/entities/Currency';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { ETheme } from '@/shared/consts/theme';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = () => <ProfilePage />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [
    StoreDecorator({
        profile: {
            form: {
                first: 'Сергей',
                lastname: 'Степанов',
                age: 23,
                currency: ECurrency.RUB,
                country: ECountry.RUSSIA,
                city: 'Kurgan',
                username: 'admin',
                avatar: 'https://yt3.googleusercontent.com/ytc/AGIKgqNoQCWRSz0rcSjcI1qn8i2LcS4UOz5Z7ynyq6bnGyU=s900-c-k-c0x00ffffff-no-rj',
            },
            error: undefined,
        },
    }),
];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
    ThemeDecorator(ETheme.DARK),
    StoreDecorator({
        profile: {
            form: {
                first: 'Сергей',
                lastname: 'Степанов',
                age: 23,
                currency: ECurrency.RUB,
                country: ECountry.RUSSIA,
                city: 'Kurgan',
                username: 'admin',
                avatar: 'https://yt3.googleusercontent.com/ytc/AGIKgqNoQCWRSz0rcSjcI1qn8i2LcS4UOz5Z7ynyq6bnGyU=s900-c-k-c0x00ffffff-no-rj',
            },
            error: undefined,
        },
    }),
];
