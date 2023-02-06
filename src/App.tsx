import React from 'react';
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import AppRoutes from './router/Router';
import { history } from './services/history';

function App() {
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
        theme='dark'
      />
    </HistoryRouter>
  );
}

export default App;
