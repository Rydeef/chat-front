import React, { useEffect, useRef } from 'react';
import { io, Socket } from 'socket.io-client';
import Chat from '../components/Chat/Chat';
import Sidebar from '../components/Sidebar/Sidebar';

const Home = () => {
  const socket = useRef<Socket | null>(null);

  useEffect(() => {
    socket.current = io('http://192.168.1.100:5000');
    socket.current.emit('add-user', window.localStorage.getItem('token'));
  }, []);
  return (
    <div className='flex'>
      <Sidebar />
      <Chat socket={socket.current} />
    </div>
  );
};

export default Home;
