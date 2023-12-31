import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App/App';
import { BrowserRouter as Router } from 'react-router-dom';
import { worker } from './mocks/browser';
import './index.css';

worker.start({ onUnhandledRequest: 'bypass' });

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
