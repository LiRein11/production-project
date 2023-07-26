import { StateSchema } from '@/app/providers/redux';

export const getLoginState = (state: StateSchema) => state?.loginForm;
