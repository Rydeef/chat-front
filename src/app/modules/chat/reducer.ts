import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import {
  getChatAsync,
  getChatListAsync,
  sendMessageAsync,
  setActiveChat,
} from "./actions";
import { ChatState } from "./types";

export const getChatMessagesReducer = (
  builder: ActionReducerMapBuilder<ChatState>
) => {
  builder.addCase(getChatAsync.fulfilled, (state, action) => {
    state.isLoadingMessages = false;
    state.selectedChat = action.payload;
  });

  builder.addCase(getChatAsync.pending, (state) => {
    state.isLoadingMessages = true;
    state.selectedChat = undefined;
  });

  builder.addCase(getChatAsync.rejected, (state) => {
    state.isLoadingMessages = false;
    state.selectedChat = null;
  });
};

export const getChatListReducer = (
  builder: ActionReducerMapBuilder<ChatState>
) => {
  builder.addCase(getChatListAsync.fulfilled, (state, action) => {
    state.isLoadingList = false;
    state.chatList = action.payload!;
  });

  builder.addCase(getChatListAsync.pending, (state) => {
    state.isLoadingList = true;
    state.chatList = null;
  });

  builder.addCase(getChatListAsync.rejected, (state) => {
    state.isLoadingList = false;
    state.chatList = null;
  });
};

export const setActiveChatReducer = (
  builder: ActionReducerMapBuilder<ChatState>
) => {
  builder.addCase(setActiveChat, (state, action) => {
    state.activeChat = action.payload;
  });
};

export const sendMessageAsyncReducer = (
  builder: ActionReducerMapBuilder<ChatState>
) => {
  builder.addCase(sendMessageAsync.fulfilled, (state, action) => {
    state.currentSendingMessage = action.payload;
    state.selectedChat.push(action.payload);
  });
};
