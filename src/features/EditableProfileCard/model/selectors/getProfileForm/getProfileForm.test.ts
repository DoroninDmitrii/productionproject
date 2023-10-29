import { StateSchema } from '@/app/providers/StoreProvider';
import { getProfileForm } from './getProfileForm';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';

describe('getProfileForm', () => {
    test('should return form', () => {
        const data = {
            username: 'admin',
            age: 30,
            country: Country.Ukraine,
            lastname: 'Ivanov',
            first: 'Ivan',
            city: 'Moscow',
            currency: Currency.USD,
        };

        const state: DeepPartial<StateSchema> = {
            profile: {
                form: data,
            },
        };
        expect(getProfileForm(state as StateSchema)).toEqual(data);
    });
    test('should return empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileForm(state as StateSchema)).toEqual(undefined);
    });
});
