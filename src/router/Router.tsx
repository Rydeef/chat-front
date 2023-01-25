import React, { ReactNode } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PATHNAMES } from '../constants/routes';
import PageWrapper from '../components/PageWrapper/PageWrapper';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Setting from '../pages/Setting';
import AppRoute from './AppRoute';

const layoutRoutes: { element: ReactNode; path: PATHNAMES }[] = [
  {
    element: <Home />,
    path: PATHNAMES.CHATS,
  },
  {
    element: <Setting />,
    path: PATHNAMES.SETTING,
  },
];

const routes = [
  {
    element: <div>Not found</div>,
    path: PATHNAMES.NOT_FOUND,
  },
  {
    element: <Login />,
    path: PATHNAMES.LOGIN,
  },
  {
    element: <Register />,
    path: PATHNAMES.REGISTER,
  },
];

const AppRoutes = () => {
  return (
    <Routes>
      {layoutRoutes.map(({ element, path }) => (
        <Route
          key={path}
          path={path}
          element={
            <PageWrapper>
              <AppRoute>{element}</AppRoute>
            </PageWrapper>
          }
        />
      ))}
      {routes.map(({ element, path }) => (
        <Route
          key={path}
          path={path}
          element={<AppRoute>{element}</AppRoute>}
        />
      ))}
    </Routes>
  );
};

export default AppRoutes;
