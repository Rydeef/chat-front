import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { auth } from './modules/auth/slice';
import { chat } from './modules/chat/slice';
import { currentUser } from './modules/currentUser/slice';

export const store = configureStore({
  reducer: {
    auth,
    chat,
    currentUser,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
