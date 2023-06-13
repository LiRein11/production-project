import { AsyncThunkAction, DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/redux';
import axios, { AxiosStatic } from 'axios';
import { EValidateError } from 'entities/Profile';

type ActionCreatorType<Return, Arg, RejectedValue> = (
    arg: Arg,
) => AsyncThunkAction<Return, Arg, { rejectValue: string | EValidateError[] }>;

jest.mock('axios');

const mockedAxios = jest.mocked(axios, true); // Мок не только модуля, но и внутренних полей (например post)(глубокий мок)

export class TestAsyncThunk<Return, Arg, RejectedValue> {
    dispatch: jest.MockedFn<any>;

    getState: () => StateSchema;

    actionCreator: ActionCreatorType<Return, Arg, RejectedValue>;

    api: jest.MockedFunctionDeep<AxiosStatic>;

    navigate: jest.MockedFn<any>;

    constructor(actionCreator: ActionCreatorType<Return, Arg, RejectedValue>, state?: DeepPartial<StateSchema>) {
        this.actionCreator = actionCreator;
        this.dispatch = jest.fn();
        this.getState = jest.fn(() => state as StateSchema); // Чтобы возвращал state при необходимости

        this.api = mockedAxios;
        this.navigate = jest.fn();
    }

    async callThunk(arg: Arg) {
        const action = this.actionCreator(arg);
        const result = await action(this.dispatch, this.getState, { api: this.api, navigate: this.navigate });

        return result;
    }
}
