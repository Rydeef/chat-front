import React, { FC } from 'react';
import UserMenu from './template/UserMenu';

interface Props {
  isOpen: boolean;
}

const DropMenu: FC<Props> = ({ isOpen }) => {
  if (!isOpen) return null;

  return <UserMenu />;
};

export default DropMenu;
