import React, { useState } from 'react';
import LoaderChatItem from '../Skeleton/LoaderChatItem';
import ChatItem from './ChatItem';

const ChatLink = () => {
  const [load, setLoad] = useState(true);

  setTimeout(() => setLoad(false), 2000);

  const MOCK_MESSAGE = [
    {
      id: 'ID-1',
      imgUrl: '1',
      color: 'bg-[#827397]',
      title: 'TITLE1',
      time: '12:00',
      lastMessage: 'Message1',
    },
    {
      id: 'ID-2',
      color: 'bg-[#FF7B54]',
      title: 'TITLE2',
      time: '13:00',
      lastMessage:
        'Mesage Mesage Mesage Mesage Mesage Mesage Mesage Mesage Mesage Mesage Mesage Mesage Mesage Mesage Mesage',
    },
    {
      id: 'ID-3',
      color: 'bg-[#FF7B54]',
      avatar: 'avatar3',
      title: 'TITLE3',
      time: '14:00',
      lastMessage: 'Message3',
    },
  ];

  return load ? <LoaderChatItem /> : <ChatItem messageItems={MOCK_MESSAGE} />;
};

export default ChatLink;
