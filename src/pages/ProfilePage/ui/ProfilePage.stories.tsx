import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ETheme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ECurrency } from 'entities/Currency';
import { ECountry } from 'entities/Country';
import avatar from 'shared/ui/Avatar/storybook.jpg';
import ProfilePage from './ProfilePage';

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
                avatar,
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
                avatar,
            },
            error: undefined,
        },
    }),
];
