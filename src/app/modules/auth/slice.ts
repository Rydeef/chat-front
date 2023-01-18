import { createSlice } from '@reduxjs/toolkit';
import { AUTH_SLICE_NAME } from './actions';
import { authUserReducer } from './reducer';
import { AuthState } from './types';

const initialState: AuthState = {
  isLoading: true,
  isAuthorized: false,
  userData: null,
};

export const { reducer: auth } = createSlice({
  name: AUTH_SLICE_NAME,
  initialState,
  reducers: {},
  extraReducers(builder) {
    authUserReducer(builder);
  },
});
