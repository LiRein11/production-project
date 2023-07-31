import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ECountry } from '@/entities/Country';
import { ECurrency } from '@/entities/Currency';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { EditableProfileCardHeader } from './EditableProfileCardHeader';
import { ETheme } from '@/shared/consts/theme';

export default {
    title: 'features/EditableProfileCard/EditableProfileCardHeader',
    component: EditableProfileCardHeader,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof EditableProfileCardHeader>;

const Template: ComponentStory<typeof EditableProfileCardHeader> = (args) => (
    <EditableProfileCardHeader {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({})];

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
