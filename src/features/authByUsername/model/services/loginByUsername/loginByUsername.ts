import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User } from 'entities/User';
import { userActions } from 'entities/User/model/slice/userSlice';
import { USER_LOCALSTORAGE_KEY } from 'shared/consts/localstorage';

interface LoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, { rejectValue: string }>(
    'login/loginByUsername',
    async ({ username, password }, thunkApi) => {
        try {
            const response = await axios.post<User>('http://localhost:8000/login', {
                username,
                password,
            });

            if (!response.data) {
                throw new Error();
            }

            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
            thunkApi.dispatch(userActions.setAuthData(response.data)); // 2 вызов диспатча

            return response.data; // 3 вызов диспатча
        } catch (e) {
            return thunkApi.rejectWithValue('error');
        }
    },
); // 1ый вызов диспатча (при вызове самого экшена)
