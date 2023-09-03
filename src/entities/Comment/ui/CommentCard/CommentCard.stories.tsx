import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CommentCard } from './CommentCard';

import { FeaturesFlagsDecorator } from '@/shared/config/storybook/FeaturesFlagsDecorator/FeaturesFlagsDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { ETheme } from '@/shared/consts/theme';

export default {
    title: 'entities/Comment/CommentCard',
    component: CommentCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    parameters: {
        loki: {
            skip: true,
        },
    },
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />;

const normalArgs = {
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

export const Normal = Template.bind({});
Normal.args = normalArgs;

export const NormalRedesigned = Template.bind({});
NormalRedesigned.args = normalArgs;
NormalRedesigned.decorators = [FeaturesFlagsDecorator({ isAppRedesigned: true })];

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
