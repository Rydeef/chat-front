import React, { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const AppRoute: FC<Props> = ({ children }) => {
  return <>{children}</>;
};

export default AppRoute;
