import React from 'react';
import Avatar from '../Avatar';
import { AVATAR_SIZES } from '../Avatar/constants';
import ChatLink from '../ChatLink/ChatLink';

const Sidebar = () => {
  return (
    <div className='w-105 h-200 bg-primary flex flex-col'>
      <div className='w-full h-16 bg-gray-1 p-5 flex items-center tracking-widest text-lg'>
        Chats
      </div>
      <div className='overflow-auto p-3'>
        <div className='w-full p-5 bg-dark rounded'>
          <Avatar
            color='bg-[#8E3200]'
            titleChat='Group1'
            size={AVATAR_SIZES.S}
          />
        </div>
        <ChatLink />
      </div>
    </div>
  );
};

export default Sidebar;
