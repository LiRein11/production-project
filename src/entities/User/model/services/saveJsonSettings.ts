import { createAsyncThunk } from '@reduxjs/toolkit';

import { setJsonSettingsMutation } from '../../api/userApi';
import { getUserAuthData } from '../selectors/getUserAuthData/getUserAuthData';
import { getJsonSettings } from '../selectors/jsonSettings';
import { JsonSettings } from '../types/jsonSettings';

import { ThunkConfig } from '@/app/providers/redux';

export const saveJsonSettings = createAsyncThunk<JsonSettings, JsonSettings, ThunkConfig<string>>(
    'user/saveJsonSettings',
    async (newJsonSettings, thunkApi) => {
        const { rejectWithValue, dispatch, getState } = thunkApi;

        const userData = getUserAuthData(getState());
        const currentJsonSettings = getJsonSettings(getState());

        if (!userData) {
            return rejectWithValue('');
        }

        try {
            const response = await dispatch(
                setJsonSettingsMutation({
                    userId: userData.id,
                    jsonSettings: { ...currentJsonSettings, ...newJsonSettings },
                }),
            ).unwrap();

            if (!response.jsonSettings) {
                return rejectWithValue('');
            }

            return response.jsonSettings;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
