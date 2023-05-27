import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { StateSchema } from './StateSchema';

export function createReduxStore(initialState?: StateSchema) {
    return configureStore<StateSchema>({
        reducer: { counter: counterReducer },
        devTools: __IS_DEV__, // Чтобы отключить девтулзы для продакшена.
        preloadedState: initialState, // Предварительное состояние (для тестов)
    });
} // С помощью функции чтобы можно было использовать потом для storybook или jest.
