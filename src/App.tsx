import React, { useEffect, useRef } from 'react';
import { io, Socket } from 'socket.io-client';
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import AppRoutes from './router/Router';
import { history } from './services/history';

function App() {
  return (
    <HistoryRouter history={history as any}>
      <AppRoutes />
    </HistoryRouter>
  );
}

export default App;
