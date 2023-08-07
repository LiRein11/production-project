import { createAsyncThunk } from '@reduxjs/toolkit';

import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';
import { validateProfileData } from '../validateProfileData/validateProfileData';

import { ThunkConfig } from '@/app/providers/redux';
import { Profile } from '@/entities/Profile';
import { EValidateError } from '@/shared/consts/errors';

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<EValidateError[]>>(
    'profile/updateProfileData',
    async (_, thunkApi) => {
        const { extra, rejectWithValue, getState } = thunkApi;
        const formData = getProfileForm(getState());

        const errors = validateProfileData(formData);

        if (errors?.length) {
            return rejectWithValue(errors);
        }

        try {
            const response = await extra.api.put<Profile>(`/profile/${formData?.id}`, formData);

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            return rejectWithValue([EValidateError.SERVER_ERROR]);
        }
    },
);
