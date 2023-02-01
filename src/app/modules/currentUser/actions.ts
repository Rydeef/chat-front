import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from 'services/axios';

export const CURRENT_USER_SLICE_NAME = 'user';

export const getCurrentUser = createAsyncThunk(
  `${CURRENT_USER_SLICE_NAME}`,
  async () => {
    try {
      const { data } = await instance.get(`/auth/user`);

      return data;
    } catch (e: any) {
      return e;
    }
  }
);
