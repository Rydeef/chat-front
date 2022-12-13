import React, { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const AppRoute: FC<Props> = ({ children }) => {
  // future loggedin logic
  return <>{children}</>;
};

export default AppRoute;