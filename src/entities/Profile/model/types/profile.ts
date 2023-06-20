import { ECountry } from 'entities/Country';
import { ECurrency } from 'entities/Currency';

export enum EValidateError {
    INCORRECT_FIRSTNAME = 'INCORRECT_FIRSTNAME',
    INCORRECT_LASTNAME = 'INCORRECT_LASTNAME',
    INCORRECT_CITY = 'INCORRECT_CITY',
    INCORRECT_AGE = 'INCORRECT_AGE',
    INCORRECT_USERNAME = 'INCORRECT_USERNAME',
    NO_DATA = 'NO_DATA',
    SERVER_ERROR = 'SERVER_ERROR',
}

export interface Profile {
    id?: string;
    first?: string;
    lastname?: string;
    age?: number;
    currency?: ECurrency;
    country?: ECountry;
    city?: string;
    username?: string;
    avatar?: string;
}

export interface ProfileSchema {
    data?: Profile;
    form?: Profile;
    isLoading?: boolean;
    error?: string;
    readonly?: boolean;
    validateErrors?: EValidateError[];
}
