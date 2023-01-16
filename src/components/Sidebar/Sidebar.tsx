import React from 'react';
import ChatLink from '../ChatLink/ChatLink';
import LoaderChatItem from '../Skeleton/LoaderChatItem';

const Sidebar = () => {
  return (
    <div className='w-105 h-200 bg-primary flex flex-col'>
      <div className='w-full h-16 bg-gray-1 p-5 flex items-center tracking-widest text-lg'>
        Chats
      </div>
      <div className='overflow-auto px-3'>
        <LoaderChatItem />
        <ChatLink />
      </div>
    </div>
  );
};

export default Sidebar;
