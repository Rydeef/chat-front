import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  getChatAsync,
  getChatListAsync,
  setActiveChat,
} from '../../app/modules/chat/actions';
import {
  selectChatList,
  selectIsLoadingList,
} from '../../app/modules/chat/selectors';
import Loader from '../Skeleton/Loader';
import LoaderChatItem from '../Skeleton/LoaderChatItem';
import ChatItem from './ChatItem';
import { ChatType } from './types';

const ChatLink = () => {
  const dispatch = useAppDispatch();

  const chatList = useAppSelector(selectChatList);
  const isLoading = useAppSelector(selectIsLoadingList);

  useEffect(() => {
    dispatch(getChatListAsync());
  }, [dispatch]);

  const onClickItem = (chat: ChatType) => {
    dispatch(setActiveChat(chat));
    dispatch(getChatAsync({ id: chat._id }));
  };

  if (!isLoading) {
    return <ChatItem onClickItem={onClickItem} messageItems={chatList} />;
  }

  return (
    <div className='flex flex-col justify-center items-center'>
      <LoaderChatItem />
      <Loader />
    </div>
  );
};

export default ChatLink;
