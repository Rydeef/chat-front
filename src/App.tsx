import React from 'react';
import { useTheme } from 'hooks/useTheme';
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import AppRoutes from './router/Router';
import { history } from './services/history';

function App() {
  const { theme } = useTheme();

  return (
    <HistoryRouter history={history as any}>
      <AppRoutes />
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        rtl={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={theme as any}
      />
    </HistoryRouter>
  );
}

export default App;
