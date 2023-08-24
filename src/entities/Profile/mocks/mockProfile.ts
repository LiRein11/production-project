import { ECountry } from '@/entities/Country';
import { ECurrency } from '@/entities/Currency';

export const mockProfile = {
    id: '1',
    first: 'admin',
    lastname: 'admin',
    age: 23,
    currency: ECurrency.RUB,
    country: ECountry.RUSSIA,
    city: 'Kurgan',
    username: 'admin',
};
