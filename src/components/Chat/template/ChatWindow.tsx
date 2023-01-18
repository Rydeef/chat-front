import React, { FC, useEffect, useRef } from 'react';
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
}

const ChatWindow: FC<Props> = ({ chat }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ref.current?.scrollIntoView({
      inline: 'start',
    });
  }, [ref]);

  console.log(chat);

  return (
    <>
      <div className='w-full h-28 px-5 sticky top-0 border-b-2 border-gray-0 mb-5'>
        <HeaderChat />
      </div>
      <div className='overflow-y-auto h-full px-5 flex flex-col justify-end'>
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
      <div className='w-full h-16 bg-dark sticky bottom-0 flex justify-center px-5 py-3'>
        <ChatInput />
      </div>
    </>
  );
};

export default ChatWindow;
