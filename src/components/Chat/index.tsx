import React, { useEffect, useRef } from 'react';
import ChatInput from '../TextField/ChatInput';
import MessageItem from '../MessageItem';
import HeaderChat from './HeaderChat';

interface Messages {
  id: string;
  name: string;
  messageText: string;
  time: string;
}

interface ChatHeader {
  color: string;
  nameChat: string;
}

interface ChatObject {
  chat: ChatHeader;
  messages: Messages[];
}

const MOCK_MESSAGES: ChatObject = {
  chat: {
    color: 'bg-[#363062]',
    nameChat: 'Title',
  },
  messages: [
    {
      id: '1',
      name: 'User',
      messageText: 'text text text text text text',
      time: '12:00',
    },
    {
      id: '2',
      name: 'User1',
      messageText: 'text text text text text text',
      time: '12:00',
    },
    {
      id: '3',
      name: 'User',
      messageText: 'text text text text text text',
      time: '12:00',
    },
    {
      id: '4',
      name: 'User1',
      messageText: 'text text text text text text',
      time: '12:00',
    },
    {
      id: '5',
      name: 'User1',
      messageText: 'text text text text text text',
      time: '12:00',
    },
    {
      id: '6',
      name: 'User',
      messageText: 'text text text text text text',
      time: '12:00',
    },
    {
      id: '7',
      name: 'User1',
      messageText: 'text text text text text text',
      time: '12:00',
    },
    {
      id: '8',
      name: 'User',
      messageText: 'text text text text text text',
      time: '12:00',
    },
    {
      id: '9',
      name: 'User',
      messageText: 'text text text text text text',
      time: '12:00',
    },
    {
      id: '10',
      name: 'User1',
      messageText: 'text text text text text text',
      time: '12:00',
    },
    {
      id: '11',
      name: 'User',
      messageText: 'text text text text text text',
      time: '12:00',
    },
    {
      id: '12',
      name: 'User',
      messageText: 'text text text text text text',
      time: '12:00',
    },
  ],
};

const Chat = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ref.current?.scrollIntoView({
      inline: 'start',
    });
  }, [ref]);

  return (
    <div className='w-full h-[800px] flex flex-col bg-dark justify-end relative'>
      <div className='w-full h-28 px-5 sticky border-b-2 border-gray-0 mb-5'>
        <HeaderChat chat={MOCK_MESSAGES.chat} />
      </div>
      <div className='overflow-y-auto px-5 '>
        {MOCK_MESSAGES.messages.map(
          ({ id, name, messageText, time }, index) => (
            <div
              key={id}
              ref={index === MOCK_MESSAGES.messages.length - 1 ? ref : null}
            >
              <MessageItem name={name} messageText={messageText} time={time} />
            </div>
          )
        )}
      </div>
      <div className='w-full h-16 bg-dark sticky bottom-0 flex justify-center px-5 py-3'>
        <ChatInput />
      </div>
    </div>
  );
};

export default Chat;
