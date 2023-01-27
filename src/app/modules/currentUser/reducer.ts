import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { getCurrentUser } from './actions';
import { UserState } from './types';

export const getCurrentUserReducer = (
  builder: ActionReducerMapBuilder<UserState>
) => {
  builder.addCase(getCurrentUser.fulfilled, (state, action) => {
    state.isLoading = false;
    state.userData = action.payload;
  });

  builder.addCase(getCurrentUser.pending, (state) => {
    state.isLoading = true;
    state.userData = undefined;
  });

  builder.addCase(getCurrentUser.rejected, (state) => {
    state.isLoading = false;
    state.userData = null;
  });
};
