import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { getChatAsync, getChatList } from './actions';
import { ChatState } from './types';

export const chatReducer = (builder: ActionReducerMapBuilder<ChatState>) => {
  builder.addCase(getChatAsync.fulfilled, (state, action) => {
    state.isLoading = false;
    state.selectedChat = action.payload!;
  });

  builder.addCase(getChatAsync.pending, (state) => {
    state.isLoading = true;
    state.selectedChat = null;
  });

  builder.addCase(getChatAsync.rejected, (state) => {
    state.isLoading = false;
    state.selectedChat = null;
  });
  //chat-list
  builder.addCase(getChatList.fulfilled, (state, action) => {
    state.isLoading = false;
    state.chatList = action.payload!;
  });

  builder.addCase(getChatList.pending, (state) => {
    state.isLoading = true;
    state.chatList = null;
  });

  builder.addCase(getChatList.rejected, (state) => {
    state.isLoading = false;
    state.chatList = null;
  });
};
