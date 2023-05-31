import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { loginByUsername } from '../services/loginByUsername/loginByUsername';
import { LoginSchema } from '../types/loginSchema';

const initialState: LoginSchema = {
    username: '',
    password: '',
    isLoading: false,
    error: undefined,
};

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload;
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
        },
        setClearError: (state) => {
            state.error = null;
        },
        setClearInputs: (state) => {
            state.username = '';
            state.password = '';
        },
    },
    extraReducers: (builder) => {
        builder.addCase(loginByUsername.pending, (state) => {
            state.isLoading = true;
            state.error = undefined;
        });
        builder.addCase(loginByUsername.fulfilled, (state) => {
            state.isLoading = false;
        });
        builder.addCase(loginByUsername.rejected, (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
        });
    },
});

// Action creators are generated for each case reducer function
export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;
