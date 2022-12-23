import React from 'react';
import ChatLink from '../ChatLink/ChatLink';

const Sidebar = () => {
  return (
    <div className='w-[420px] h-[800px] bg-primary flex flex-col'>
      <div className='w-full h-[68px] bg-gray0 p-5 flex items-center'>
        Chats
      </div>
      <div className='overflow-auto'>
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
