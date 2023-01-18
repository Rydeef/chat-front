import React, { useEffect, useRef } from 'react';
import MessageItem from '../../MessageItem/MessageItem';
import ChatInput from '../../TextField/ChatInput';
import HeaderChat from '../HeaderChat';

const ChatWindow = ({ chat }: { chat: any }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ref.current?.scrollIntoView({
      inline: 'start',
    });
  }, [ref]);

  return (
    <>
      <div className='w-full h-28 px-5 sticky top-0 border-b-2 border-gray-0 mb-5'>
        <HeaderChat />
      </div>
      <div className='overflow-y-auto h-full px-5 flex flex-col justify-end'>
        {chat?.messages.map(
          //@ts-ignore
          ({ id, userName, message, time }, index) => (
            <div
              key={id}
              ref={index === chat[0].messages.length - 1 ? ref : null}
              className=''
            >
              <MessageItem userName={userName} message={message} time={time} />
            </div>
          )
        )}
      </div>
      <div className='w-full h-16 bg-dark sticky bottom-0 flex justify-center px-5 py-3'>
        <ChatInput />
      </div>
    </>
  );
};

export default ChatWindow;
