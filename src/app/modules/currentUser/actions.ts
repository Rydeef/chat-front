import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { instance } from 'services/axios';
import { history } from 'services/history';

export const CURRENT_USER_SLICE_NAME = 'user';

export const getCurrentUser = createAsyncThunk(
  `${CURRENT_USER_SLICE_NAME}`,
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await instance.get(`/auth/user`);

      return data;
    } catch (e: any) {
      localStorage.removeItem('token');

      toast.error('Something went wrong...');

      history.push('/login');

      return rejectWithValue(e?.responce.data.message);
    }
  }
);
