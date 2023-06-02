import { StateSchema } from 'app/providers/redux';

export const getLoginUsername = (state: StateSchema) => state?.loginForm?.username || '';
