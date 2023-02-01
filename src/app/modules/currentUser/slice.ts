import { createSlice } from '@reduxjs/toolkit';
import { CURRENT_USER_SLICE_NAME } from './actions';
import { getCurrentUserReducer } from './reducer';
import { UserState } from './types';

const initialState: UserState = {
  isLoading: true,
  userData: null,
};

export const { reducer: currentUser } = createSlice({
  name: CURRENT_USER_SLICE_NAME,
  initialState,
  reducers: {},
  extraReducers(builder) {
    getCurrentUserReducer(builder);
  },
});
