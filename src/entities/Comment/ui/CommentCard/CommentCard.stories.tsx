import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { ETheme } from 'app/providers/ThemeProvider';
import { CommentCard } from './CommentCard';

export default {
    title: 'entities/CommentCard',
    component: CommentCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => (
    <CommentCard {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
    comment: {
        id: '1',
        text: 'some comment 1',
        user: {
            id: '1',
            username: 'admin',
            avatar: 'https://i.yapx.cc/Ra9P6.jpg',
        },
    },
};

export const IsLoadingNormal = Template.bind({});
IsLoadingNormal.args = {
    isLoading: true,
};

export const Dark = Template.bind({});
Dark.args = {
    comment: {
        id: '1',
        text: 'some comment 1',
        user: {
            id: '1',
            username: 'admin',
            avatar: 'https://i.yapx.cc/Ra9P6.jpg',
        },
    },
};
Dark.decorators = [ThemeDecorator(ETheme.DARK)];

export const IsLoadingDark = Template.bind({});
IsLoadingDark.args = {
    isLoading: true,
};
IsLoadingDark.decorators = [ThemeDecorator(ETheme.DARK)];
