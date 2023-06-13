import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { ETheme } from 'app/providers/ThemeProvider';
import { ECurrency } from 'entities/Currency';
import { ECountry } from 'entities/Country';
// import avatar from 'shared/assets/tests/storybook.jpg';
import { ProfileCard } from './ProfileCard';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => (
    <ProfileCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    data: {
        first: 'Сергей',
        lastname: 'Степанов',
        age: 23,
        currency: ECurrency.RUB,
        country: ECountry.RUSSIA,
        city: 'Kurgan',
        username: 'admin',
        avatar: 'https://yt3.googleusercontent.com/ytc/AGIKgqNoQCWRSz0rcSjcI1qn8i2LcS4UOz5Z7ynyq6bnGyU=s900-c-k-c0x00ffffff-no-rj',
    },
    readonly: false,
};

export const WithError = Template.bind({});
WithError.args = { error: 'true' };

export const Loading = Template.bind({});
Loading.args = { isLoading: true };

export const Dark = Template.bind({});
Dark.args = {
    data: {
        first: 'Сергей',
        lastname: 'Степанов',
        age: 23,
        currency: ECurrency.RUB,
        country: ECountry.RUSSIA,
        city: 'Kurgan',
        username: 'admin',
        avatar: 'https://yt3.googleusercontent.com/ytc/AGIKgqNoQCWRSz0rcSjcI1qn8i2LcS4UOz5Z7ynyq6bnGyU=s900-c-k-c0x00ffffff-no-rj',
    },
    readonly: false,
};
Dark.decorators = [ThemeDecorator(ETheme.DARK)];
