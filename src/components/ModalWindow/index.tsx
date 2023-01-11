import React, { FC, ReactNode, MouseEvent } from "react";
import { Portal } from "./Portal";

interface Props {
  isOpen: boolean;
  children: ReactNode;
  onClose: () => void;
}

const ModalWindow: FC<Props> = ({ children, isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlerClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <Portal>
      <div
        className="w-screen h-screen bg-black/80 fixed top-0 left-0"
        onClick={onClose}
      >
        <div
          className="fixed w-[400px] h-[400px] top-1/2 -translate-y-2/4 left-1/2 -translate-x-2/4 opacity-100 p-8 bg-white rounded-2xl text-black"
          onClick={handlerClick}
        >
          {children}
        </div>
      </div>
    </Portal>
  );
};

export default ModalWindow;
