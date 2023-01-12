import React, { useState } from 'react';
import LoaderChatItem from '../Skeleton/LoaderChatItem';
import ChatItem from './ChatItem';

const ChatLink = () => {
  const [load, setLoad] = useState(true);

  setTimeout(() => setLoad(false), 2000);

  const MOCK_MESSAGE = [
    {
      id: 'ID-1',
      avatar: 'avatar',
      title: 'TITLE1',
      time: '12:00',
      lastMessage: 'Message1',
    },
    {
      id: 'ID-2',
      avatar: 'avatar2',
      title: 'TITLE2',
      time: '13:00',
      lastMessage: 'Message2',
    },
    {
      id: 'ID-3',
      avatar: 'avatar3',
      title: 'TITLE3',
      time: '14:00',
      lastMessage: 'Message3',
    },
  ];

  return (
    <div>
      {load ? <LoaderChatItem /> : <ChatItem messageItems={MOCK_MESSAGE} />}
    </div>
  );
};

export default ChatLink;
