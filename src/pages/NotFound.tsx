import React from 'react';
import { ReactComponent as NotFoundSVG } from 'assets/404.svg';

const NotFound = () => {
  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center gap-3'>
      <NotFoundSVG className='w-20 fill-black dark:fill-white' />
      <span className='text-2xl font-bold'>Oooooooops, page not found</span>
    </div>
  );
};

export default NotFound;
