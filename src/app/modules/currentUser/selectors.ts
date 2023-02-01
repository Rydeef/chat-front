import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'app/store';

export const selectChatState = (state: RootState) => state.currentUser;

export const selectIsLoading = createSelector(
  selectChatState,
  (state) => state.isLoading
);

export const selectUserData = createSelector(
  selectChatState,
  (state) => state.userData
);
