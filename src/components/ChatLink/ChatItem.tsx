import { useAppSelector } from 'app/hooks';
import { selectActiveChat } from 'app/modules/chat/selectors';
import classNames from 'classnames';
import React, { FC } from 'react';
import Avatar from '../Avatar/Avatar';
import { ChatType } from './types';

interface Props {
  messageItems: ChatType[] | null;
  onClickItem: (chat: ChatType) => void;
}

const ChatItem: FC<Props> = ({ messageItems, onClickItem }) => {
  const { _id } = useAppSelector(selectActiveChat) || {};

  const onClickChatItem = (chat: ChatType) => () => onClickItem(chat);

  return (
    <>
      {messageItems?.map((chat) => (
        <div
          key={chat._id}
          className={classNames(
            'duration-300 w-full flex items-center bg-dark/70 px-4 py-5 my-3 rounded cursor-pointer select-none',
            {
              'outline outline-1 !opacity-100 !bg-[#E9E9E9]/100 dark:outline-white/50 dark:!bg-dark/100':
                chat._id === _id,
            }
          )}
          onClick={onClickChatItem(chat)}
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
