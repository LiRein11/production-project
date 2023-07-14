import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Suspense } from 'react';
import { ArticleDetailsComments } from './ArticleDetailsComments';

export default {
    title: 'pages/ArticlePageDetails/Comments',
    component: ArticleDetailsComments,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleDetailsComments>;

const Template: ComponentStory<typeof ArticleDetailsComments> = (args) => (
    <Suspense fallback={<div>Loading comments...</div>}>
        <ArticleDetailsComments {...args} />
    </Suspense>
);

export const Normal = Template.bind({});
Normal.args = { id: '1' };
Normal.decorators = [StoreDecorator({})];
