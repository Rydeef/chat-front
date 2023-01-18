import React, { FC } from 'react';
import Avatar from '../Avatar/Avatar';
import { ChatType } from './types';

interface Props {
  messageItems: ChatType[] | null;
  onClickItem: (chat: ChatType) => void;
}

const ChatItem: FC<Props> = ({ messageItems, onClickItem }) => {
  return (
    <>
      {messageItems?.map((chat) => (
        <div
          key={chat._id}
          className='w-80 flex items-center bg-dark px-4 py-5 my-3 rounded cursor-pointer '
          onClick={() => onClickItem(chat)}
        >
          <Avatar titleChat={chat.userName} color={chat.avatarColor} />
          <div className='w-full flex flex-col gap-3 ml-5 truncate'>
            <span className='font-bold'>{chat.userName}</span>
          </div>
        </div>
      ))}
    </>
  );
};

export default ChatItem;
