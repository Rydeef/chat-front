import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../../../services/axios';
import { history } from '../../../services/history';
import { LoginPayload, RegisterPayload } from './types';

export const AUTH_SLICE_NAME = 'auth';

export const logOutUserAction = createAction(`${AUTH_SLICE_NAME}/logOut`);

export const authUserAsync = createAsyncThunk(
  `${AUTH_SLICE_NAME}/login`,
  async (values: LoginPayload) => {
    try {
      const { data } = await instance.post('/auth/login', values);

      window.localStorage.setItem('token', data?.token);

      history.push('/home');

      return data?.user;
    } catch (e: any) {
      return e;
    }
  }
);

export const registerUserAsync = createAsyncThunk(
  `${AUTH_SLICE_NAME}/register`,
  async (values: RegisterPayload) => {
    try {
      const { data } = await instance.post('/auth/register', values);

      history.push('/login');

      return data;
    } catch (e: any) {
      return e;
    }
  }
);
