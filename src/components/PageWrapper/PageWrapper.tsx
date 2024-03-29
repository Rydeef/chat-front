import React, { FC, ReactNode, useEffect, useState } from 'react';
import { useModal } from 'hooks/useModal';
import { useAppDispatch } from 'app/hooks';
import { history } from 'services/history';
import DropMenu from '../DropMenu/DropMenu';
import Header from '../Header/Header';
import ModalWindow from '../ModalWindow/ModalWindow';
import CreateChat from '../ModalWindow/template/CreateChat';
import { getCurrentUser } from 'app/modules/currentUser/actions';

interface IProps {
  children: ReactNode;
}

const PageWrapper: FC<IProps> = ({ children }) => {
  const dispatch = useAppDispatch();

  const { isOpen, closeModal, openModal } = useModal();

  const [isShowMenu, setIsShowMenu] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      history.push('/login');
    }
  }, []);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  const toggleClickAvatar = () => setIsShowMenu((prev) => !prev);

  return (
    <div className='flex flex-col px-32 w-full h-screen'>
      <Header openModal={openModal} toggleClickAvatar={toggleClickAvatar} />
      <div className='relative'>
        <DropMenu isOpen={isShowMenu} />
      </div>
      <ModalWindow isOpen={isOpen} onClose={closeModal}>
        <CreateChat onClose={closeModal} />
      </ModalWindow>
      {children}
    </div>
  );
};

export default PageWrapper;
