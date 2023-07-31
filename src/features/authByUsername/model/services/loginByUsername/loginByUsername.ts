import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/redux';
import { User, userActions } from '@/entities/User';
import { USER_LOCALSTORAGE_KEY } from '@/shared/consts/localstorage';

interface LoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, ThunkConfig<string>>('login/loginByUsername', async ({ username, password }, thunkApi) => {
    const { dispatch, extra, rejectWithValue } = thunkApi;
    try {
        const response = await extra.api.post<User>('/login', {
            username,
            password,
        });

        if (!response.data) {
            throw new Error();
        }

        localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
        dispatch(userActions.setAuthData(response.data)); // 2 вызов диспатча

        return response.data; // 3 вызов диспатча
    } catch (e) {
        return rejectWithValue('error');
    }
}); // 1ый вызов диспатча (при вызове самого экшена)
