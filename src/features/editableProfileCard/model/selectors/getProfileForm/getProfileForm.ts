import { StateSchema } from '@/app/providers/redux';

export const getProfileForm = (state: StateSchema) => state?.profile?.form;
