import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { history } from 'services/history';
import { authUserAsync, registerUserAsync, logOutUserAction } from './actions';
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

export const registerUserReducer = (
  builder: ActionReducerMapBuilder<AuthState>
) => {
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

export const logOutUserReducer = (
  builder: ActionReducerMapBuilder<AuthState>
) => {
  builder.addCase(logOutUserAction, (state) => {
    localStorage.removeItem('token');

    history.push('/login');

    state.userData = null;
  });
};
