import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ArticleDetailsPageHeader } from './ArticleDetailsPageHeader';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { ETheme } from '@/shared/consts/theme';

export default {
    title: 'pages/ArticlePageDetails/ArticleDetailsPageHeader',
    component: ArticleDetailsPageHeader,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleDetailsPageHeader>;

const Template: ComponentStory<typeof ArticleDetailsPageHeader> = (args) => (
    <ArticleDetailsPageHeader {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [
    StoreDecorator({
        articleDetails: {},
    }),
];

export const NormalWithAuth = Template.bind({});
NormalWithAuth.args = {};
NormalWithAuth.decorators = [StoreDecorator({ user: { authData: {} } })];

export const DarkWithAuth = Template.bind({});
DarkWithAuth.args = {};
DarkWithAuth.decorators = [
    StoreDecorator({ user: { authData: {} } }),
    ThemeDecorator(ETheme.DARK),
];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
    StoreDecorator({
        articleDetails: {},
    }),
    ThemeDecorator(ETheme.DARK),
];
