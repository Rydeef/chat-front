import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../../../services/axios';
import { ActiveChat } from './types';

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
  async ({ id }: { id: string }) => {
    try {
      const { data } = await instance.get(`/messages/${id}`);

      console.log(data);

      return data;
    } catch (e: any) {
      if (e.status === 200) return e.peyload;
      return e;
    }
  }
);

export const getChatListAsync = createAsyncThunk(
  `${CHAT_LIST_SLICE_NAME}`,
  async () => {
    try {
      const { data } = await instance.get('/auth/allusers');

      return data;
    } catch (e: any) {
      if (e.status === 200) {
        return e.data;
      }
      return e;
    }
  }
);
