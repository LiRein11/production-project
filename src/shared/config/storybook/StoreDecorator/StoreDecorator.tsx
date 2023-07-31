import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from '@/app/providers/redux';
// eslint-disable-next-line
import '@/app/styles/index.scss';
import { articleDetailsReducer } from '@/entities/Article/testing';

import { addCommentFormReducer } from '@/features/addCommentForm/testing';
import { loginReducer } from '@/features/authByUsername/testing';
import { profileReducer } from '@/features/editableProfileCard/testing';
import { articlePageDetailsReducer } from '@/pages/ArticlePageDetails/testing';
import { ReducersList } from '@/shared/lib/components/DynamicReducerLoader/DynamicReducerLoader';

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    addCommentForm: addCommentFormReducer,
    articlePageDetails: articlePageDetailsReducer,
};

export const StoreDecorator = (state: DeepPartial<StateSchema>, asyncReducers?: ReducersList) => (Story: Story) =>
    (
        <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
            <Story />
        </StoreProvider>
    );
