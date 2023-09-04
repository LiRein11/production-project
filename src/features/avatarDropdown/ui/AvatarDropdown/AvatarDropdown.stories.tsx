import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AvatarDropdown } from './AvatarDropdown';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { ETheme } from '@/shared/consts/theme';
import { HStack } from '@/shared/ui/redesigned/Stack';

export default {
    title: 'features/AvatarDropdown',
    component: AvatarDropdown,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AvatarDropdown>;

const Template: ComponentStory<typeof AvatarDropdown> = () => (
    <HStack max justify="end">
        <AvatarDropdown direction="bottom left" />
    </HStack>
);

export const AuthAvatarDropdown = Template.bind({});
AuthAvatarDropdown.args = {};
AuthAvatarDropdown.decorators = [
    StoreDecorator({
        user: {
            authData: {
                id: '1',
                username: 'LiRein',
                avatar: 'https://pristor.ru/wp-content/uploads/2019/09/%D0%9F%D1%80%D0%B8%D0%BA%D0%BE%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8-%D0%BD%D0%B0-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D1%83-%D0%B4%D0%BB%D1%8F-%D0%BC%D1%83%D0%B6%D1%87%D0%B8%D0%BD-3.jpg',
            },
        },
    }),
];

export const AuthAvatarDropdownDark = Template.bind({});
AuthAvatarDropdownDark.args = {};
AuthAvatarDropdownDark.decorators = [
    StoreDecorator({
        user: {
            authData: {
                id: '1',
                username: 'LiRein',
                avatar: 'https://pristor.ru/wp-content/uploads/2019/09/%D0%9F%D1%80%D0%B8%D0%BA%D0%BE%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8-%D0%BD%D0%B0-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D1%83-%D0%B4%D0%BB%D1%8F-%D0%BC%D1%83%D0%B6%D1%87%D0%B8%D0%BD-3.jpg',
            },
        },
    }),
    ThemeDecorator(ETheme.DARK),
];
