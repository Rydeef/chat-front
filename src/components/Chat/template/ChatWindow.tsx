import React, { FC, useEffect, useRef } from 'react';
import { Socket } from 'socket.io-client';
import MessageItem from '../../MessageItem/MessageItem';
import ChatInput from '../../TextField/ChatInput';
import HeaderChat from '../HeaderChat';

interface Messages {
  id: string;
  userName: string;
  message: string;
  time: string;
  fromSelf: boolean;
}

interface Props {
  chat: Messages[];
  socket: Socket | null;
}

const ChatWindow: FC<Props> = ({ chat, socket }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ref.current?.scrollIntoView({
      inline: 'start',
    });
  }, [ref]);

  return (
    <div className='h-full flex flex-col overflow-y-auto'>
      <div className='w-full bg-black px-5 py-3 sticky top-0 border-b-2 border-gray-0 mb-5'>
        <HeaderChat />
      </div>
      <div className='h-full px-5 flex flex-col justify-end'>
        {chat?.map(({ id, userName, message, time, fromSelf }, index) => (
          <div key={id} ref={index === chat.length - 1 ? ref : null}>
            <MessageItem
              fromSelf={fromSelf}
              userName={userName}
              message={message}
              time={time}
            />
          </div>
        ))}
      </div>
      <div className='w-full h-16 bg-dark sticky bottom-0 flex justify-center px-5 py-3 self-end'>
        <ChatInput socket={socket} />
      </div>
    </div>
  );
};

export default ChatWindow;