import { StateSchema } from 'app/providers/redux';

export const getProfileReadonly = (state: StateSchema) => state?.profile?.readonly;
