import { StateSchema } from '@/app/providers/redux';

export const getUserInited = (state: StateSchema) => state.user?._inited;
