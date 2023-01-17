import React from 'react';
import Chat from '../components/Chat';
import Sidebar from '../components/Sidebar/Sidebar';

const Home = () => {
  return (
    <div className='flex'>
      <Sidebar />
      <Chat />
    </div>
  );
};

export default Home;
