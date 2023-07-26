import { StateSchema } from '@/app/providers/redux';

export const getCounter = (state: StateSchema) => state.counter;
