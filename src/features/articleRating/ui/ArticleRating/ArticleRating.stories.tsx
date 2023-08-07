import { ComponentStory, ComponentMeta } from '@storybook/react';
import withMock from 'storybook-addon-mock';

import ArticleRating from './ArticleRating';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { ETheme } from '@/shared/consts/theme';

export default {
    title: 'features/ArticleRating',
    component: ArticleRating,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [withMock],
} as ComponentMeta<typeof ArticleRating>;

const Template: ComponentStory<typeof ArticleRating> = (args) => <ArticleRating {...args} />;

export const Normal = Template.bind({});
Normal.args = { articleId: '1' };
Normal.decorators = [
    StoreDecorator({
        user: {
            authData: { id: '1' },
        },
    }),
];
Normal.parameters = {
    mockData: [
        {
            url: `${__API__}/article-ratings?articleId=1&userId=1`,
            method: 'GET',
            status: 200,
            response: [
                {
                    rate: 3,
                },
            ],
        },
    ],
};

export const WithoutRating = Template.bind({});
WithoutRating.args = { articleId: '1' };
WithoutRating.decorators = [
    StoreDecorator({
        user: {
            authData: { id: '1' },
        },
    }),
];
WithoutRating.parameters = {
    mockData: [
        {
            url: `${__API__}/article-ratings?articleId=1&userId=1`,
            method: 'GET',
            status: 200,
            response: [],
        },
    ],
};

export const Dark = Template.bind({});
Dark.args = { articleId: '1' };
Dark.decorators = [
    StoreDecorator({
        user: {
            authData: { id: '1' },
        },
    }),
    ThemeDecorator(ETheme.DARK),
];
Dark.parameters = {
    mockData: [
        {
            url: `${__API__}/article-ratings?articleId=1&userId=1`,
            method: 'GET',
            status: 200,
            response: [
                {
                    rate: 3,
                },
            ],
        },
    ],
};

export const WithoutRatingDark = Template.bind({});
WithoutRatingDark.args = { articleId: '1' };
WithoutRatingDark.decorators = [
    StoreDecorator({
        user: {
            authData: { id: '1' },
        },
    }),
    ThemeDecorator(ETheme.DARK),
];
WithoutRatingDark.parameters = {
    mockData: [
        {
            url: `${__API__}/article-ratings?articleId=1&userId=1`,
            method: 'GET',
            status: 200,
            response: [],
        },
    ],
};
