import React from "react";
// import { io } from "socket.io-client";
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import AppRoutes from "./router/Router";
import { history } from "./services/history";

function App() {
  // const socket = io("http://localhost:5000");

  return (
    <HistoryRouter history={history as any}>
      <AppRoutes />
    </HistoryRouter>
  );
}

export default App;
