import { createSlice } from '@reduxjs/toolkit';
import { SELECT_CHAT_SLICE_NAME } from './actions';
import { chatReducer } from './reducer';
import { ChatState } from './types';

const initialState: ChatState = {
  isLoading: true,
  selectedChat: null,
  chatList: null,
};

export const { reducer: chat } = createSlice({
  name: SELECT_CHAT_SLICE_NAME,
  initialState,
  reducers: {},
  extraReducers(builder) {
    chatReducer(builder);
  },
});
