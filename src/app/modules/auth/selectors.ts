import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../store';

export const selectAuthState = (state: RootState) => state.auth;

export const selectIsLoadingAuth = createSelector(
  selectAuthState,
  (authState) => authState.isLoading
);

export const selectIsAuthorized = createSelector(
  selectAuthState,
  (authState) => authState.isAuthorized
);

export const selectUserData = createSelector(
  selectAuthState,
  (authState) => authState.userData
);
