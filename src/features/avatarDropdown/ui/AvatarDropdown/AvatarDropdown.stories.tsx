import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AvatarDropdown } from './AvatarDropdown';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { ETheme } from '@/shared/consts/theme';
import { HStack } from '@/shared/ui/Stack';

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

export const AvatarDropdownNormal = Template.bind({});
AvatarDropdownNormal.args = {};
AvatarDropdownNormal.decorators = [StoreDecorator({})];

export const AvatarDropdownDark = Template.bind({});
AvatarDropdownDark.args = {};
AvatarDropdownDark.decorators = [
    StoreDecorator({}),
    ThemeDecorator(ETheme.DARK),
];

export const AuthAvatarDropdown = Template.bind({});
AuthAvatarDropdown.args = {};
AuthAvatarDropdown.decorators = [
    StoreDecorator({
        user: {
            authData: {
                id: '1',
                username: 'LiRein',
                avatar: 'https://catherineasquithgallery.com/uploads/posts/2021-02/1612257690_85-p-paren-na-fioletovom-fone-111.jpg',
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
                avatar: 'https://catherineasquithgallery.com/uploads/posts/2021-02/1612257690_85-p-paren-na-fioletovom-fone-111.jpg',
            },
        },
    }),
    ThemeDecorator(ETheme.DARK),
];
