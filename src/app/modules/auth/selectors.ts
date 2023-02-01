import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'app/store';

export const selectAuthState = (state: RootState) => state.auth;

export const selectIsLoadingAuth = createSelector(
  selectAuthState,
  (authState) => authState.isLoading
);

export const selectIsAuthorized = createSelector(
  selectAuthState,
  (authState) => authState.isAuthorized
);
