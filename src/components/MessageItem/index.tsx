import React, { FC } from 'react';
import cn from 'classnames';

interface IProps {
  name: string;
  messageText: string;
  time: string;
}

const MessageItem: FC<IProps> = ({ name, messageText, time }) => {
  return (
    <div
      className={cn('flex justify-between items-center my-1 ', {
        'flex-row-reverse': name === 'User',
      })}
    >
      <div
        className={cn('flex flex-col px-3 py-3', {
          'text-right rounded-l-lg rounded-br-lg bg-message-0': name === 'User',
          'rounded-r-lg rounded-tl-lg bg-message-1': name !== 'User',
        })}
      >
        <span className='font-bold'>{name}</span>
        <span>{messageText}</span>
      </div>
      <span className='text-gray-0 text-sm'>{time}</span>
    </div>
  );
};

export default MessageItem;
