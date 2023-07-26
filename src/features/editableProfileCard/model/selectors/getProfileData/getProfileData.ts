import { StateSchema } from '@/app/providers/redux';

export const getProfileData = (state: StateSchema) => state?.profile?.data;
