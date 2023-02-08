import React, { useEffect, useRef } from 'react';
import { io, Socket } from 'socket.io-client';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { selectCurrentMessage } from 'app/modules/chat/selectors';
import { getCurrentUser } from 'app/modules/currentUser/actions';
import Chat from 'components/Chat/Chat';
import Sidebar from 'components/Sidebar/Sidebar';
import { useResize } from 'hooks/useResize';

const Home = () => {
  const dispatch = useAppDispatch();

  const currentSendingMessage = useAppSelector(selectCurrentMessage);

  const socket = useRef<Socket | null>(null);

  const { leftPanel, mouseMove, parrentMouseUp, mouseDown } = useResize();

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

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <div
      className='flex mt-8'
      onMouseUp={parrentMouseUp}
      onMouseMove={mouseMove}
    >
      <Sidebar leftPanel={leftPanel} mouseDown={mouseDown} />
      <Chat socket={socket.current} />
    </div>
  );
};

export default Home;
