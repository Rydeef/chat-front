import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { authUserAsync, registerUserAsync } from './actions';
import { AuthState } from './types';

export const authUserReducer = (
  builder: ActionReducerMapBuilder<AuthState>
) => {
  builder.addCase(authUserAsync.fulfilled, (state, action) => {
    state.isLoading = false;
    state.isAuthorized = true;
    state.userData = action.payload;
  });

  builder.addCase(authUserAsync.pending, (state) => {
    state.isLoading = true;
  });

  builder.addCase(authUserAsync.rejected, (state) => {
    state.isLoading = false;
    state.isAuthorized = false;
    state.userData = null;
  });
  //
  builder.addCase(registerUserAsync.fulfilled, (state, action) => {
    state.isLoading = false;
    state.userData = action.payload;
  });

  builder.addCase(registerUserAsync.pending, (state) => {
    state.isLoading = true;
  });

  builder.addCase(registerUserAsync.rejected, (state) => {
    state.isLoading = false;
    state.userData = null;
  });
};
