import React, { useEffect, useRef } from 'react';
import ChatInput from '../TextField/ChatInput';
import MessageItem from '../MessageItem';
import HeaderChat from './HeaderChat';
import { useAppSelector } from '../../app/hooks';
import { selectChat } from '../../app/modules/chat/selectors';

interface Messages {
  id: string;
  userName: string;
  message: string;
  time: string;
}

interface ChatHeader {
  color: string;
  title: string;
}

const Chat = () => {
  const ref = useRef<HTMLDivElement>(null);
  const chat = useAppSelector(selectChat);

  useEffect(() => {
    ref.current?.scrollIntoView({
      inline: 'start',
    });
  }, [ref]);

  useEffect(() => {
    console.log(chat);
  }, [chat]);

  // if (messages === null) return null;

  // if (messages !== null) {
  return (
    //@ts-ignore
    <div className='w-full h-[800px] flex flex-col bg-dark justify-end relative'>
      <div className='w-full h-28 px-5 sticky border-b-2 border-gray-0 mb-5'>
        {/* <HeaderChat chat={messages?.data} /> */}
      </div>
      <div className='overflow-y-auto px-5 '>
        {/* {messages.message.map(({ id, name, messageText, time }, index) => (
            <div
              key={id}
              ref={index === MOCK_MESSAGES.messages.length - 1 ? ref : null}
            >
              <MessageItem name={name} messageText={messageText} time={time} />
            </div>
          ))} */}
      </div>
      <div className='w-full h-16 bg-dark sticky bottom-0 flex justify-center px-5 py-3'>
        <ChatInput />
      </div>
    </div>
  );
  // }
};

export default Chat;
