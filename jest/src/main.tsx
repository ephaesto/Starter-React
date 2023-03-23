import QueryProvider from 'providers/QueryProvider';
import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Router from './router/Router';

const container = document.getElementById('root');
if (!container) {
  throw new Error('container not found!');
}

const root = createRoot(container);

root.render(
  <React.StrictMode>
    <QueryProvider>
      <Router />
    </QueryProvider>
  </React.StrictMode>,
);
