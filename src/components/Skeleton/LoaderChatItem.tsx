import React from 'react';
import Shimmer from './Shimmer';

const LoaderChatItem = () => {
  return (
    <div className='w-80 h-22 flex items-center bg-dark px-4 py-5 my-3 rounded cursor-pointer'>
      <Shimmer className=' w-16 h-16 !rounded-full shrink-0' />
      <div className='flex flex-col w-full gap-3 ml-5'>
        <div className='flex justify-between'>
          <Shimmer className='w-20 h-5' />
          <Shimmer className='w-10 h-3' />
        </div>
        <Shimmer className='w-40 h-3 mt-2' />
      </div>
    </div>
  );
};

export default LoaderChatItem;
