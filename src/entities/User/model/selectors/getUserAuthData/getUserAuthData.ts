import { StateSchema } from 'app/providers/redux';

export const getUserAuthData = (state: StateSchema) => state.user.authData;
