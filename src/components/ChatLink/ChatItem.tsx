import React, { FC } from 'react';
import Avatar from '../Avatar';
import { Message } from './types';

interface Props {
  messageItems: Message[];
}

const ChatItem: FC<Props> = ({ messageItems }) => {
  return (
    <>
      {messageItems.map(({ color, title, time, lastMessage, id }) => (
        <div
          key={id}
          className='w-80 flex items-center bg-dark px-4 py-5 my-3 rounded cursor-pointer '
        >
          <Avatar titleChat={title} color={color} />
          <div className='w-full flex flex-col gap-3 ml-5 truncate'>
            <div className='flex justify-between'>
              <span className='font-bold'>{title}</span>
              <span className='text-sm'>{time}</span>
            </div>
            <span className='text-gray-2'>{lastMessage}</span>
          </div>
        </div>
      ))}
    </>
  );
};

export default ChatItem;
