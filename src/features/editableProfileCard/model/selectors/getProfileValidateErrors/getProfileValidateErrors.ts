import { StateSchema } from 'app/providers/redux';

export const getProfileValidateErrors = (state: StateSchema) => state?.profile?.validateErrors;
