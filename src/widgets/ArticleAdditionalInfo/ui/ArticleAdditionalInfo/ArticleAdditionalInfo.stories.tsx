import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ArticleAdditionalInfo } from './ArticleAdditionalInfo';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
    title: 'widgets/ArticleAdditionalInfo/ArticleAdditionalInfo',
    component: ArticleAdditionalInfo,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleAdditionalInfo>;

const Template: ComponentStory<typeof ArticleAdditionalInfo> = (args) => (
    <ArticleAdditionalInfo {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({})];
