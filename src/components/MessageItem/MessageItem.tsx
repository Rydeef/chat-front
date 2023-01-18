import React, { FC } from 'react';
import cn from 'classnames';

interface Props {
  userName: string;
  message: string;
  time: string;
  fromSelf: boolean;
}

const MessageItem: FC<Props> = ({ userName, message, time, fromSelf }) => {
  return (
    <div
      className={cn('flex justify-between items-center my-1 ', {
        'flex-row-reverse': fromSelf,
      })}
    >
      <div
        className={cn('flex flex-col px-3 py-3', {
          'text-right rounded-l-lg rounded-br-lg bg-message-0': fromSelf,
          'rounded-r-lg rounded-tl-lg bg-message-1': !fromSelf,
        })}
      >
        <span className='font-bold'>{userName}</span>
        <span>{message}</span>
      </div>
      <span className='text-gray-0 text-sm'>{time}</span>
    </div>
  );
};

export default MessageItem;
