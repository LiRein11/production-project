import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ProfileSchema, Profile, EValidateError } from '../types/profile';
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';

const initialState: ProfileSchema = {
    isLoading: true,
    readonly: true,
    error: undefined,
    data: undefined,
    form: undefined,
    validateErrors: undefined,
};

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setReadonly: (state, action: PayloadAction<boolean>) => {
            state.readonly = action.payload;
        },
        cancelUpdate: (state) => {
            state.readonly = true;
            state.form = state.data;
            state.validateErrors = undefined;
        },
        updateProfile: (state, action: PayloadAction<Profile | undefined>) => {
            state.form = {
                ...state.form,
                ...action.payload,
            };
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProfileData.pending, (state) => {
            state.isLoading = true;
            state.validateErrors = undefined;
        });
        builder.addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
            state.data = action.payload;
            state.form = action.payload;
            state.isLoading = false;
        });
        builder.addCase(fetchProfileData.rejected, (state, action: PayloadAction<string | undefined>) => {
            state.isLoading = false;
            state.error = action.payload;
        });
        builder.addCase(updateProfileData.pending, (state) => {
            state.isLoading = true;
            state.validateErrors = undefined;
        });
        builder.addCase(updateProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
            state.data = action.payload;
            state.form = action.payload;
            state.isLoading = false;
            state.readonly = true;
            state.validateErrors = undefined;
        });
        builder.addCase(updateProfileData.rejected, (state, action: PayloadAction<EValidateError[] | undefined>) => {
            state.isLoading = false;
            state.validateErrors = action.payload;
        });
    },
});

// Action creators are generated for each case reducer function
export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
