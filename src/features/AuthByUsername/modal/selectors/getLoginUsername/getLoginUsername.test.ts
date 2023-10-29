import { StateSchema } from '@/app/providers/StoreProvider';
import { getLoginUsername } from './getLoginUsername';

describe('getLoginUsername', () => {
    test('should return a username', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: 'admin',
            },
        };
        expect(getLoginUsername(state as StateSchema)).toEqual('admin');
    });
    test('should return a username false', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginUsername(state as StateSchema)).toEqual('');
    });
});
