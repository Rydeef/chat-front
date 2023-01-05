import React, { useState } from 'react';
import LoaderChatItem from '../Skeleton/LoaderChatItem';
import ChatItem from './ChatItem';

const ChatLink = () => {
  const [load, setLoad] = useState(true);

  setTimeout(() => setLoad(false), 2000);

  return (
    <div>
      {load ? (
        <LoaderChatItem />
      ) : (
        <ChatItem
          title='Я еблан'
          time='12:40'
          lastMessage='Я ебал тебя в сраку'
        />
      )}
    </div>
  );
};

export default ChatLink;
