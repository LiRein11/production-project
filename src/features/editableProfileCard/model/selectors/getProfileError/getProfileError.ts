import { StateSchema } from 'app/providers/redux';

export const getProfileError = (state: StateSchema) => state?.profile?.error;
