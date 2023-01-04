import React from 'react';
import ChatLink from '../ChatLink/ChatLink';

const Sidebar = () => {
  return (
    <div className='w-[420px] h-[800px] bg-primary flex flex-col'>
      <div className='w-full h-[68px] bg-gray-1 p-5 flex items-center'>
        Chats
      </div>
      <div className='overflow-auto p-3'>
        <ChatLink />
        <ChatLink />
        <ChatLink />
        <ChatLink />
        <ChatLink />
        <ChatLink />
        <ChatLink />
        <ChatLink />
        <ChatLink />
        <ChatLink />
        <ChatLink />
        <ChatLink />
        <ChatLink />
        <ChatLink />
        <ChatLink />
        <ChatLink />
        <ChatLink />
        <ChatLink />
        <ChatLink />
        <ChatLink />
        <ChatLink />
        <ChatLink />
        <ChatLink />
      </div>
    </div>
  );
};

export default Sidebar;
