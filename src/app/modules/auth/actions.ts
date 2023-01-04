import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../../../services/axios';
import { history } from '../../../services/history';

export const AUTH_SLICE_NAME = 'auth';

export const authUserAsync = createAsyncThunk(
  `${AUTH_SLICE_NAME}/login`,
  async (values) => {
    try {
      const { data } = await instance.post('/login', values);

      localStorage.setItem('token', data?.token);
      history.push('/home');

      return data?.user;
    } catch (e) {
      console.log(e);
    }
  }
);
