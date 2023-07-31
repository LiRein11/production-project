import { Profile } from '@/entities/Profile';
import { EValidateError } from '@/shared/consts/errors';

export interface ProfileSchema {
    data?: Profile;
    form?: Profile;
    isLoading?: boolean;
    error?: string;
    readonly?: boolean;
    validateErrors?: EValidateError[];
}
