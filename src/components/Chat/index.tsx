import React from 'react';
import MessageItem from '../MessageItem';

interface Messages {
  id: string;
  name: string;
  messageText: string;
  time: string;
}

const MOCK_MESSAGES: Messages[] = [
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
];

const Chat = () => {
  return (
    <div className='w-full h-[800px] flex flex-col bg-dark justify-end relative'>
      <div className='w-full h-20 p-5 sticky border-b-2 border-gray-0 mb-5'>
        123123123123
      </div>
      <div className='overflow-y-auto px-5 '>
        {MOCK_MESSAGES.map(({ id, name, messageText, time }) => (
          <MessageItem
            key={id}
            name={name}
            messageText={messageText}
            time={time}
          />
        ))}
      </div>
      <div className='w-full h-16 bg-dark sticky bottom-0 flex justify-center px-5 py-3'>
        <input
          className='w-full h-full text-black rounded px-3 py-4'
          placeholder='message'
          type='text'
        />
      </div>
    </div>
  );
};

export default Chat;
