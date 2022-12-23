import React, { FC, ReactNode, useEffect } from 'react';
import Header from '../Header';

interface IProps {
  children: ReactNode;
}

const PageWrapper: FC<IProps> = ({ children }) => {
  useEffect(() => {
    if (!localStorage.getItem('talkaccesstoken')) {
      // history.push('/login')
    }
  }, []);

  return (
    <div className='flex flex-col px-32 w-full h-screen'>
      <Header />
      {children}
    </div>
  );
};

export default PageWrapper;
