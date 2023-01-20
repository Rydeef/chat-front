import React, { FC } from 'react';
import {
  selectChat,
  selectIsLoadingMessages,
} from '../../app/modules/chat/selectors';
import { useAppSelector } from '../../app/hooks';
import Default from './template/Default';
import Loader from '../Skeleton/Loader';
import { LOADER_SIZES } from '../Skeleton/constants';
import ChatWindow from './template/ChatWindow';
import { Socket } from 'socket.io-client';

interface Props {
  socket: Socket | null;
}

const Chat: FC<Props> = ({ socket }) => {
  const chat = useAppSelector(selectChat);
  const isLoading = useAppSelector(selectIsLoadingMessages);

  if (chat === null) return <Default />;

  return (
    <div className='w-full h-[800px] flex flex-col bg-dark relative'>
      {isLoading ? (
        <div className='w-full h-full flex justify-center items-center'>
          <Loader size={LOADER_SIZES.L} />
        </div>
      ) : (
        <ChatWindow chat={chat} socket={socket} />
      )}
    </div>
  );
};

export default Chat;