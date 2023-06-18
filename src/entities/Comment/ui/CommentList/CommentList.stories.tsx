import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CommentList } from './CommentList';

export default {
    title: 'entities/CommentList',
    component: CommentList,
    argTypes: {
        backgroundColor: { control: 'color' },
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
    isLoading: true,
};
