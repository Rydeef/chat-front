import React, { FC } from 'react';
import { Chat } from '../../constants/types';
import Avatar from '../Avatar';

interface Props {
  messageItems: Chat[] | null;
  onClickItem: (id: string) => void;
}

const ChatItem: FC<Props> = ({ messageItems, onClickItem }) => {
  return (
    <>
      {messageItems?.map(({ color, title, time, lastMessage, id }) => (
        <div
          key={id}
          className='w-80 flex items-center bg-dark px-4 py-5 my-3 rounded cursor-pointer '
          onClick={() => onClickItem(id)}
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
