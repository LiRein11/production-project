import { Profile } from 'entities/Profile';

export enum EValidateError {
    INCORRECT_FIRSTNAME = 'INCORRECT_FIRSTNAME',
    INCORRECT_LASTNAME = 'INCORRECT_LASTNAME',
    INCORRECT_CITY = 'INCORRECT_CITY',
    INCORRECT_AGE = 'INCORRECT_AGE',
    INCORRECT_USERNAME = 'INCORRECT_USERNAME',
    NO_DATA = 'NO_DATA',
    SERVER_ERROR = 'SERVER_ERROR',
}

export interface ProfileSchema {
    data?: Profile;
    form?: Profile;
    isLoading?: boolean;
    error?: string;
    readonly?: boolean;
    validateErrors?: EValidateError[];
}
