import { StateSchema } from 'app/providers/redux';

export const getLoginError = (state: StateSchema) => state?.loginForm?.error;
