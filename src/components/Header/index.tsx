import React from 'react';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as CreateChat } from '../../assets/create-chat.svg';
import { ReactComponent as UserIcon } from '../../assets/user-svg.svg';

const Header = () => {
  return (
    <div className='w-full flex px-7 justify-between items-center bg-dark mb-6 rounded-b-lg'>
      <Logo className='w-11' />
      <div className='flex w-32 justify-between items-center'>
        <CreateChat className='cursor-pointer fill-white' />
        <div className='w-14 h-14 rounded-full bg-primary cursor-pointer flex justify-center items-center'>
          <UserIcon className='w-8 fill-white' />
        </div>
      </div>
    </div>
  );
};

export default Header;
