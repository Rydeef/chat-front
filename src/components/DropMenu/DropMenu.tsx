import React, { FC } from 'react';
import { useAppSelector } from '../../app/hooks';
import { selectUserData } from '../../app/modules/currentUser/selectors';
import UserMenu from './template/UserMenu';

interface Props {
  isOpen: boolean;
}

const DropMenu: FC<Props> = ({ isOpen }) => {
  const { userName } = useAppSelector(selectUserData) || {};

  if (!isOpen) return null;

  return <UserMenu userName={userName} />;
};

export default DropMenu;
