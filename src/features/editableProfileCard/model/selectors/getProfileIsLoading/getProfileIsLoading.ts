import { StateSchema } from '@/app/providers/redux';

export const getProfileIsLoading = (state: StateSchema) => state?.profile?.isLoading || false;
