import { createSlice } from '@reduxjs/toolkit';
import { SELECT_CHAT_SLICE_NAME } from './actions';
import {
  getChatMessagesReducer,
  getChatListReducer,
  setActiveChatReducer,
} from './reducer';
import { ChatState } from './types';

const initialState: ChatState = {
  isLoadingMessages: true,
  isLoadingList: true,
  selectedChat: null,
  chatList: null,
  activeChat: null,
};

export const { reducer: chat } = createSlice({
  name: SELECT_CHAT_SLICE_NAME,
  initialState,
  reducers: {},
  extraReducers(builder) {
    getChatMessagesReducer(builder);
    getChatListReducer(builder);
    setActiveChatReducer(builder);
  },
});
