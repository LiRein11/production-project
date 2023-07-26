import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { ETheme } from '@/app/providers/ThemeProvider';
import { CommentList } from './CommentList';

export default {
    title: 'entities/Comment/CommentList',
    component: CommentList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    parameters: {
        loki: {
            skip: true,
        },
    },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => (
    <CommentList {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
    comments: [
        {
            id: '1',
            text: 'some comment 1',
            user: {
                id: '1',
                username: 'admin',
                avatar: 'https://i.yapx.cc/Ra9P6.jpg',
            },
        },
        {
            id: '2',
            text: 'some comment 2',
            user: {
                id: '1',
                username: 'admin',
                avatar: 'https://i.yapx.cc/Ra9P6.jpg',
            },
        },
    ],
};

export const IsLoading = Template.bind({});
IsLoading.args = {
    comments: [],
    isLoading: true,
};

export const Dark = Template.bind({});
Dark.args = {
    comments: [
        {
            id: '1',
            text: 'some comment 1',
            user: {
                id: '1',
                username: 'admin',
                avatar: 'https://i.yapx.cc/Ra9P6.jpg',
            },
        },
        {
            id: '2',
            text: 'some comment 2',
            user: {
                id: '1',
                username: 'admin',
                avatar: 'https://i.yapx.cc/Ra9P6.jpg',
            },
        },
    ],
};
Dark.decorators = [ThemeDecorator(ETheme.DARK)];

export const IsLoadingDark = Template.bind({});
IsLoadingDark.args = {
    comments: [],
    isLoading: true,
};
IsLoadingDark.decorators = [ThemeDecorator(ETheme.DARK)];
