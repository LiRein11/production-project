import { ComponentStory, ComponentMeta } from '@storybook/react';

import ArticleEditPage from './ArticleEditPage';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { ETheme } from '@/shared/consts/theme';

export default {
    title: 'pages/ArticleEditPage',
    component: ArticleEditPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleEditPage>;

const Template: ComponentStory<typeof ArticleEditPage> = (args) => <ArticleEditPage {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [
    StoreDecorator({
        articleDetails: {},
    }),
];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
    StoreDecorator({
        articleDetails: {},
    }),
    ThemeDecorator(ETheme.DARK),
];
