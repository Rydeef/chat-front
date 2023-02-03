import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { instance } from 'services/axios';
import { history } from 'services/history';
import { LoginPayload, RegisterPayload } from './types';
import 'react-toastify/ReactToastify.min.css';

export const AUTH_SLICE_NAME = 'auth';

export const logOutUserAction = createAction(`${AUTH_SLICE_NAME}/logOut`);

export const authUserAsync = createAsyncThunk(
  `${AUTH_SLICE_NAME}/login`,
  async (values: LoginPayload, { rejectWithValue }) => {
    try {
      const { data } = await instance.post('/auth/login', values);

      if (data.status) {
        window.localStorage.setItem('token', data?.token);

        toast.success('Successful login');

        history.push('/home');

        return data?.user;
      } else {
        throw new Error('Incorect Login or Password');
      }
    } catch (e: any) {
      toast.error(e.message);

      history.push('login');

      return rejectWithValue(e?.responce.data.message);
    }
  }
);

export const registerUserAsync = createAsyncThunk(
  `${AUTH_SLICE_NAME}/register`,
  async (values: RegisterPayload, { rejectWithValue }) => {
    try {
      const { data } = await instance.post('/auth/register', values);

      toast.success('Successful login');

      history.push('/login');

      return data;
    } catch (e: any) {
      return rejectWithValue(e?.responce.data.message);
    }
  }
);
