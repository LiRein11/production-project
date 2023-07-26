import { Profile } from '@/entities/Profile';
import { EValidateError } from '../../consts/consts';

export const validateProfileData = (profile?: Profile) => {
    if (!profile) {
        return [EValidateError.NO_DATA];
    }

    const { first, lastname, age, city, username } = profile;

    const errors: EValidateError[] = [];

    if (!first) {
        errors.push(EValidateError.INCORRECT_FIRSTNAME);
    }

    if (!lastname) {
        errors.push(EValidateError.INCORRECT_LASTNAME);
    }

    if (!Number.isInteger(age) || age! <= 5) {
        errors.push(EValidateError.INCORRECT_AGE);
    }

    if (!city) {
        errors.push(EValidateError.INCORRECT_CITY);
    }

    if (!username) {
        errors.push(EValidateError.INCORRECT_USERNAME);
    }

    return errors;
};
