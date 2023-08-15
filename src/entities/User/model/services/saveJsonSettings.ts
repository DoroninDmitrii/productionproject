import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { JsonSettings } from '../types/jsonSettings';
import { getUserAuthData } from '../selectors/getUserAuthData/getUserAuthData';
import { getJsonSettings } from '../selectors/jsonSelector';
import { setJsonSettingsMutation } from '../../api/userApi';

export const saveJsonSettings = createAsyncThunk<
  JsonSettings,
  JsonSettings,
  ThunkConfig<string>
>('user/saveJsonSettings', async (newJsonSettings, thunkApi) => {
  const { rejectWithValue, getState, dispatch } = thunkApi;
  const userData = getUserAuthData(getState())
  const currentSettings = getJsonSettings(getState())
  console.log(currentSettings)
 
  if (!userData) {
    return rejectWithValue('error') as any;
  }

  try {
    const response = await dispatch(setJsonSettingsMutation({
      userId: userData.id,
      jsonSettings: {
        ...currentSettings,
        ...newJsonSettings
      }
    })).unwrap();

    if (!response.jsonSettings) {
      return rejectWithValue('error') as any;
    }

    return response.jsonSettings;

  } catch (e) {
    console.log(e);
  }
});
