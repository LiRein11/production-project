import { DeepPartial } from '@reduxjs/toolkit';
import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/redux';
import 'app/styles/index.scss';

export const StoreDecorator = (state: DeepPartial<StateSchema>) => (Story: Story) =>
    (
        <StoreProvider initialState={state}>
            <Story />
        </StoreProvider>
    );
