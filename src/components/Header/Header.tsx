import React, { FC } from 'react';
import { useAppSelector } from 'app/hooks';
import {
  selectIsLoadingUserData,
  selectUserData,
} from 'app/modules/currentUser/selectors';
import Avatar from '../Avatar/Avatar';
import { AVATAR_SIZES } from 'components/Avatar/constants';
import { ReactComponent as Logo } from 'assets/logo.svg';
import { ReactComponent as CreateChat } from 'assets/create-chat.svg';

interface Props {
  openModal: () => void;
  toggleClickAvatar: () => void;
}

const Header: FC<Props> = ({ openModal, toggleClickAvatar }) => {
  const { userName, avatarColor } = useAppSelector(selectUserData) || {};
  const isLoading = useAppSelector(selectIsLoadingUserData);

  return (
    <div className='w-full flex px-7 justify-between items-center bg-dark rounded-b-lg'>
      <Logo className='w-11' />
      <div className='flex w-28 justify-between items-center'>
        <CreateChat className='cursor-pointer fill-white' onClick={openModal} />
        <Avatar
          size={AVATAR_SIZES._44}
          color={avatarColor}
          titleChat={userName}
          isLoading={isLoading}
          onClick={toggleClickAvatar}
        />
      </div>
    </div>
  );
};

export default Header;
