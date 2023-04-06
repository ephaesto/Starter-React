import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import SetupFakeServer from 'setup/setup-fake-server/SetupFakeServer';
import SetupQuery from 'setup/setup-query/SetupQuery';
import Router from './router/Router';

const container = document.getElementById('root');
if (!container) {
  throw new Error('container not found!');
}

const root = createRoot(container);

root.render(
  <React.StrictMode>
    <SetupFakeServer>
      <SetupQuery>
        <Router />
      </SetupQuery>
    </SetupFakeServer>
  </React.StrictMode>,
);
