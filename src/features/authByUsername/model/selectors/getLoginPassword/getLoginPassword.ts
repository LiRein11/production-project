import { StateSchema } from '@/app/providers/redux';

export const getLoginPassword = (state: StateSchema) => state?.loginForm?.password || '';
