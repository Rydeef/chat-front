import React, { FC } from 'react';

interface IProps {
  avatar?: string;
  title?: string;
  time?: string;
  lastMessage?: string;
}

const ChatItem: FC<IProps> = ({
  avatar = 'AVATAR',
  title,
  time,
  lastMessage,
}) => {
  return (
    <div>
      <div className='w-full h-20 flex items-center bg-dark px-6 py-5 my-3 rounded cursor-pointer'>
        {avatar}
        <div className='flex flex-col w-full gap-3 ml-5'>
          <div className='flex justify-between'>
            <div>{title}</div>
            <div>{time}</div>
          </div>
          <span className='text-gray-6'>{lastMessage}</span>
        </div>
      </div>
    </div>
  );
};

export default ChatItem;
