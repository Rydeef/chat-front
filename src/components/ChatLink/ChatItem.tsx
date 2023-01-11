import React, { FC } from 'react';
import { Message } from './types';

interface IProps {
  messageItems: Message[];
}

const ChatItem: FC<IProps> = ({ messageItems }) => {
  return (
    <>
      {messageItems.map(({ avatar, title, time, lastMessage, id }) => (
        <div
          key={id}
          className='w-full flex items-center bg-dark px-6 py-5 my-3 rounded cursor-pointer'
        >
          {avatar}
          <div className='w-full flex flex-col gap-3 ml-5'>
            <div className='flex justify-between'>
              <span className='font-bold'>{title}</span>
              <span className='text-[14px]'>{time}</span>
            </div>
            <span className='text-gray-2'>{lastMessage}</span>
          </div>
        </div>
      ))}
    </>
  );
};

export default ChatItem;
