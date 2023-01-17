import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getChatAsync, getChatList } from '../../app/modules/chat/actions';
import {
  selectChat,
  selectChatList,
  selectIsLoadingChat,
} from '../../app/modules/chat/selectors';
import Loader from '../Skeleton/Loader';
import LoaderChatItem from '../Skeleton/LoaderChatItem';
import ChatItem from './ChatItem';

const ChatLink = () => {
  const dispatch = useAppDispatch();

  const chatList = useAppSelector(selectChatList);
  const Loading = useAppSelector(selectIsLoadingChat);

  useEffect(() => {
    dispatch(getChatList());
  }, [dispatch]);

  const onClickItem = () => {
    dispatch(getChatAsync());
  };

  return Loading ? (
    <div className='flex flex-col justify-center items-center'>
      <LoaderChatItem />
      <Loader />
    </div>
  ) : (
    <ChatItem onClickItem={onClickItem} messageItems={chatList} />
  );
};

export default ChatLink;
