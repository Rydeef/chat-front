import { toast } from 'react-toastify';
import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from 'services/axios';
import { ActiveChat, SendMessage } from './types';
import { history } from 'services/history';

export const SELECT_CHAT_SLICE_NAME = 'chat';
export const CHAT_LIST_SLICE_NAME = 'chatList';
export const SEND_MESSAGE_SLICE_NAME = 'message';

export const setActiveChat = createAction(
  `${CHAT_LIST_SLICE_NAME}`,
  (values: ActiveChat) => ({
    payload: values,
  })
);

export const getChatAsync = createAsyncThunk(
  `${SELECT_CHAT_SLICE_NAME}`,
  async ({ id }: { id: string }, { rejectWithValue }) => {
    try {
      const { data } = await instance.get(`/messages/${id}`);

      return data;
    } catch (e: any) {
      localStorage.removeItem('token');

      toast.error('Something went wrong...');

      history.push('/login');

      return rejectWithValue(e?.responce.data.message);
    }
  }
);

export const getChatListAsync = createAsyncThunk(
  `${CHAT_LIST_SLICE_NAME}`,
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await instance.get('/auth/allusers');

      return data;
    } catch (e: any) {
      localStorage.removeItem('token');

      toast.error('Something went wrong...');

      history.push('/login');

      return rejectWithValue(e?.responce.data.message);
    }
  }
);

export const sendMessageAsync = createAsyncThunk(
  `${SEND_MESSAGE_SLICE_NAME}`,
  async (values: SendMessage, { rejectWithValue }) => {
    try {
      const { data } = await instance.post(`/messages`, values);

      return data;
    } catch (e: any) {
      localStorage.removeItem('token');

      toast.error('Something went wrong...');

      history.push('/login');

      return rejectWithValue(e?.responce.data.message);
    }
  }
);
