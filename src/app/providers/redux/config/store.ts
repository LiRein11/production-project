import { CombinedState, Reducer, ReducersMapObject, configureStore } from '@reduxjs/toolkit';

import { StateSchema, ThunkExtraArg } from './StateSchema';
import { createReducerManager } from './reducerManager';

import { counterReducer } from '@/entities/Counter';
import { userReducer } from '@/entities/User';
import { $api } from '@/shared/api/api';
import { rtkApi } from '@/shared/api/rtkApi';
import { scrollSaveReducer } from '@/widgets/Page';

export function createReduxStore(initialState?: StateSchema, asyncReducers?: ReducersMapObject<StateSchema>) {
    const rootReducers = {
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer,
        scrollSave: scrollSaveReducer,
        [rtkApi.reducerPath]: rtkApi.reducer,
    };

    const reducerManager = createReducerManager(rootReducers);

    const extraArg: ThunkExtraArg = {
        api: $api,
    };

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
        devTools: __IS_DEV__, // Чтобы отключить девтулзы для продакшена.
        preloadedState: initialState, // Предварительное состояние (для тестов)
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                thunk: { extraArgument: extraArg },
            }).concat(rtkApi.middleware), // extraArgument у thunkApi, в него можно располагать вспомогательные функции/данные, и в этот аргумент помещается instance api, чтобы не прокидывать постоянно
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
} // С помощью функции чтобы можно было использовать потом для storybook или jest.

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
