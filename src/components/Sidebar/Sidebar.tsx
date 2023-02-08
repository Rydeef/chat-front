import React from 'react';
import ChatLink from '../ChatLink/ChatLink';

const Sidebar = () => {
  return (
    <div className='w-105 h-200 flex flex-col duration-300 bg-slate-400 dark:bg-primary'>
      <div className='w-full h-20 p-5 flex items-center tracking-widest text-white text-lg bg-slate-500 dark:bg-gray-1'>
        Chats
      </div>
      <div className='overflow-auto px-3'>
        <ChatLink />
      </div>
    </div>
  );
};

export default Sidebar;
