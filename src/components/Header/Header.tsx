import React, { FC } from 'react';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as CreateChat } from '../../assets/create-chat.svg';
import { useAppSelector } from '../../app/hooks';
import { selectUserData } from '../../app/modules/currentUser/selectors';
import Avatar from '../Avatar/Avatar';

interface Props {
  openModal: () => void;
  toggleClickAvatar: () => void;
}

const Header: FC<Props> = ({ openModal, toggleClickAvatar }) => {
  const userData = useAppSelector(selectUserData);

  return (
    <div className='w-full flex px-7 justify-between items-center bg-dark rounded-b-lg'>
      <Logo className='w-11' />
      <div className='flex w-32 justify-between items-center'>
        <CreateChat className='cursor-pointer fill-white' onClick={openModal} />
        <Avatar
          color={userData?.avatarColor}
          titleChat={userData?.userName}
          onClick={toggleClickAvatar}
        />
      </div>
    </div>
  );
};

export default Header;
