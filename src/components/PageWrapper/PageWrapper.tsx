import React, { FC, ReactNode, useEffect } from 'react';
import { useModal } from '../../hooks/useModal';
import Header from '../Header';
import ModalWindow from '../ModalWindow';
import CreateChat from '../ModalWindow/template/CreateChat';

interface IProps {
  children: ReactNode;
}

const PageWrapper: FC<IProps> = ({ children }) => {
  const { isOpen, closeModal, openModal } = useModal();

  useEffect(() => {
    if (!localStorage.getItem('talkaccesstoken')) {
      // history.push('/login')
    }
  }, []);

  return (
    <div className='flex flex-col px-32 w-full h-screen'>
      <Header openModal={openModal} />
      <ModalWindow isOpen={isOpen} onClose={closeModal}>
        <CreateChat onClose={closeModal} />
      </ModalWindow>
      {children}
    </div>
  );
};

export default PageWrapper;
