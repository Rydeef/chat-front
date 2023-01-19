import React, { useEffect, useRef } from 'react';
import { io, Socket } from 'socket.io-client';
import { useAppSelector } from '../app/hooks';
import { selectCurrentMessage } from '../app/modules/chat/selectors';
import Chat from '../components/Chat/Chat';
import Sidebar from '../components/Sidebar/Sidebar';

const Home = () => {
  const currentSendingMessage = useAppSelector(selectCurrentMessage);
  const socket = useRef<Socket | null>(null);

  useEffect(() => {
    socket.current = io('http://localhost:5000');
    socket.current.emit('add-user', window.localStorage.getItem('token'));

    socket.current.on('msg-recieve', (msg) => {
      console.log(msg);
    });
  }, []);

  useEffect(() => {
    if (socket && currentSendingMessage) {
      socket.current?.emit('send-msg', currentSendingMessage);
    }
  }, [currentSendingMessage]);

  return (
    <div className='flex'>
      <Sidebar />
      <Chat socket={socket.current} />
    </div>
  );
};

export default Home;
