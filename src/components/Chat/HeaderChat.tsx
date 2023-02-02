import React from 'react';
import { useAppSelector } from 'app/hooks';
import { ReactComponent as SettingSVG } from 'assets/dots.svg';
import { selectActiveChat } from 'app/modules/chat/selectors';
import Avatar from '../Avatar/Avatar';
import { AVATAR_SIZES } from '../Avatar/constants';

const HeaderChat = () => {
  const { avatarColor, userName } = useAppSelector(selectActiveChat) || {};

  return (
    <div className='w-full bg-black px-5 py-3 sticky top-0 border-b-2 border-gray-0 mb-5'>
      <div className='h-full flex items-center justify-between'>
        <div className='flex items-center justify-between'>
          <Avatar
            titleChat={userName}
            color={avatarColor}
            size={AVATAR_SIZES._48}
          />
          <span className='pl-3 font-bold text-lg'>{userName}</span>
        </div>
        <SettingSVG className='cursor-pointer' />
      </div>
    </div>
  );
};

export default HeaderChat;
