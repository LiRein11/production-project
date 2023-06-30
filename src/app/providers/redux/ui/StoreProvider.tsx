import { Provider } from 'react-redux';
import { ReactNode } from 'react';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { createReduxStore } from '../config/store';
import { StateSchema } from '../config/StateSchema';

export interface StoreProviderProps {
    children?: ReactNode;
    initialState?: DeepPartial<StateSchema>;
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
}

export const StoreProvider = (props: StoreProviderProps) => {
    const { children, initialState, asyncReducers } = props;

    const store = createReduxStore(initialState as StateSchema, asyncReducers as ReducersMapObject<StateSchema>);

    console.log('render');

    return <Provider store={store}>{children}</Provider>;
};
