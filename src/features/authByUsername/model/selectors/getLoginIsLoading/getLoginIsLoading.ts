import { StateSchema } from '@/app/providers/redux';

export const getLoginIsLoading = (state: StateSchema) => state?.loginForm?.isLoading || false;
