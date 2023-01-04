import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { authUserAsync } from './actions';
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
};
