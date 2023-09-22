import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';
import { User, UserSchema } from '../types/user';
import { setFeatureFlags } from '@/shared/lib/features';
import { saveJsonSettings } from '../services/saveJsonSettings';
import { initAuthData } from '../services/initAuthData';
import { JsonSettings } from '../types/jsonSettings';

const initialState: UserSchema = {
  _inited: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
      state.authData = action.payload;
      setFeatureFlags(action.payload.features)

      localStorage.setItem(
        USER_LOCALSTORAGE_KEY, action.payload.id
        );
    },
    logout: (state) => {
      state.authData = undefined;
      localStorage.removeItem(USER_LOCALSTORAGE_KEY);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        saveJsonSettings.fulfilled,
        (state, { payload }: PayloadAction<JsonSettings>) => {
          if (state.authData) {
            state.authData.jsonSettings = payload;
          }
        },
      );
      builder
      .addCase(
        initAuthData.fulfilled,
        (state, { payload }: PayloadAction<User>) => {
          state.authData = payload;
          console.log(payload.features, 'pa')
          setFeatureFlags(payload?.features)
          state._inited = true;
        },
      )
      .addCase(
        initAuthData.rejected,
        (state ) => {
            state._inited = true;
        },
      )
  },
});

export const { actions: userAction } = userSlice;
export const { reducer: userReducer } = userSlice;
