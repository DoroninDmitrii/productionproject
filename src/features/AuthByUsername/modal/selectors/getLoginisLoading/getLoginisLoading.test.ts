import { StateSchema } from '@/app/providers/StoreProvider';
import { getLoginisLoading } from './getLoginisLoading';

describe('getLoginisLoading', () => {
  test('should return a loading', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        isLoading: true,
      },
    };
    expect(getLoginisLoading(state as StateSchema)).toEqual(true);
  });
  test('should return isLoading false', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginisLoading(state as StateSchema)).toEqual(false);
  });
});
