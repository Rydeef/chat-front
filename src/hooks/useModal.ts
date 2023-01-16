import { useState } from 'react';

export const useModal = (modalOpen = false) => {
  const [isOpen, setIsOpen] = useState(modalOpen);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return { isOpen, openModal, closeModal, toggleOpen };
};
