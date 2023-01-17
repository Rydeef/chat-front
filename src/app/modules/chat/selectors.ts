import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../store';

export const selectChatState = (state: RootState) => state.chat;

export const selectIsLoadingChat = createSelector(
  selectChatState,
  (state) => state.isLoading
);

export const selectChat = createSelector(
  selectChatState,
  (state) => state.selectedChat
);

export const selectChatList = createSelector(
  selectChatState,
  (state) => state.chatList
);
