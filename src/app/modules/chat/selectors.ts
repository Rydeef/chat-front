import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../store';

export const selectChatState = (state: RootState) => state.chat;

export const selectIsLoadingMessages = createSelector(
  selectChatState,
  (state) => state.isLoadingMessages
);

export const selectIsLoadingList = createSelector(
  selectChatState,
  (state) => state.isLoadingList
);

export const selectActiveChat = createSelector(
  selectChatState,
  (state) => state.activeChat
);

export const selectChat = createSelector(
  selectChatState,
  (state) => state.selectedChat
);

export const selectChatList = createSelector(
  selectChatState,
  (state) => state.chatList
);
