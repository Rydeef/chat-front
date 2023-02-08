import React, { FC, MutableRefObject } from 'react';
import ChatLink from '../ChatLink/ChatLink';

interface Props {
  leftPanel: MutableRefObject<HTMLDivElement | null>;
  mouseDown: VoidFunction;
}

const Sidebar: FC<Props> = ({ leftPanel, mouseDown }) => {
  return (
    <div className='flex'>
      <div ref={leftPanel} className='w-105 h-200 bg-primary flex flex-col'>
        <div className='w-full h-16 bg-gray-1 p-5 flex items-center tracking-widest text-lg'>
          Chats
        </div>
        <div className='overflow-auto px-3'>
          <ChatLink />
        </div>
      </div>
      <div
        className='bg-gray-600 h-200 w-0.5 cursor-col-resize active:bg-gray-500'
        onMouseDown={mouseDown}
      />
    </div>
  );
};

export default Sidebar;
