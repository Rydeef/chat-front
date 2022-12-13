import React, { ReactNode } from "react";
import { Route, Routes } from "react-router-dom";
import PageWrapper from "../components/PageWrapper/PageWrapper";

import { PATHNAMES } from "../constants/routes";
import Chats from "../pages/Chats";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AppRoute from "./AppRoute";

const layoutRoutes: { element: ReactNode; path: PATHNAMES }[] = [
  {
    element: <Chats />,
    path: PATHNAMES.CHATS,
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
