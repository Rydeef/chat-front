import React, { FC, ReactNode, useEffect, useState } from "react";
import Header from "../Header";
import ModalWindow from "../ModalWindow";

interface IProps {
  children: ReactNode;
}

const PageWrapper: FC<IProps> = ({ children }) => {
  const [modalOpen, setModalOpen] = useState<boolean>(true);

  console.log(modalOpen);

  useEffect(() => {
    if (!localStorage.getItem("talkaccesstoken")) {
      // history.push('/login')
    }
  }, []);

  return (
    <div className="flex flex-col px-32 w-full h-screen">
      <Header />
      <ModalWindow isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        123123123
      </ModalWindow>
      {children}
    </div>
  );
};

export default PageWrapper;
