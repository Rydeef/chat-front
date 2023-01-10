import React from 'react';
import Avatar from '../Avatar';
import { AVATAR_SIZE } from '../Avatar/constants';
import ChatLink from '../ChatLink/ChatLink';

const Sidebar = () => {
  return (
    <div className='w-[420px] h-[800px] bg-primary flex flex-col'>
      <div className='w-full h-[68px] bg-gray-1 p-5 flex items-center'>
        Chats
      </div>
      <div className='overflow-auto p-3'>
        <div className='w-full p-5 bg-dark rounded'>
          <Avatar
            color='bg-[#8E3200]'
            titleChat='Group1'
            size={AVATAR_SIZE.S}
          />
        </div>
        <ChatLink />
      </div>
    </div>
  );
};

export default Sidebar;
