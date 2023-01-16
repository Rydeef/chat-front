import React, { FC } from 'react';
import { ChatHeader } from '../../constants/types';
import Avatar from '../Avatar';
import { AVATAR_SIZES } from '../Avatar/constants';
import { ReactComponent as SettingSVG } from '../../assets/dots.svg';

interface Props {
  chat: ChatHeader;
}

const HeaderChat: FC<Props> = ({ chat: { nameChat, color } }) => {
  return (
    <div className='h-full flex items-center justify-between'>
      <div className='flex items-center justify-between'>
        <Avatar titleChat={nameChat} color={color} size={AVATAR_SIZES.XS} />
        <span className='pl-3 font-bold text-lg'>{nameChat}</span>
      </div>
      <SettingSVG className='cursor-pointer' />
    </div>
  );
};

export default HeaderChat;
