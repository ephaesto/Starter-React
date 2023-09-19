import React from 'react';
import { createRoot } from 'react-dom/client';
import { ListOrderSetup, ListSetup } from 'setup/ListSetup';
import NestingContainer from 'utils/components/nesting-container/NestingContainer';
import './index.css';
import Router from './router/Router';

const container = document.getElementById('root');
if (!container) {
  throw new Error('container not found!');
}

const root = createRoot(container);

root.render(
  <React.StrictMode>
    <NestingContainer containers={ListSetup} containersList={ListOrderSetup}>
      <Router />
    </NestingContainer>
  </React.StrictMode>,
);
