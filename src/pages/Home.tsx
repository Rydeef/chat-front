import React from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import Chat from '../components/Chat';

const Chats = () => {
  return (
    <div className='flex'>
      <Sidebar />
      <Chat />
    </div>
  );
};

export default Chats;
