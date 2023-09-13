import { OptionsRoutesPagesType } from 'pages/optionsRoutesPagesTypes';
import HomePage from './HomePage';

export const HomeRoutes: OptionsRoutesPagesType = [
  {
    idRoute: 'valid',
    path: 'test',
    element: <HomePage />,
    layout: 'auth',
    switch: ['auth', 'linked'],
  },
  {
    idRoute: 'home',
    index: true,
    element: <HomePage />,
    wrappers: ['tracking', 'scroll'],
    layout: ['default', 'auth'],
    switch: ['auth', 'linked'],
  },
  {
    idRoute: 'valid',
    path: 'valid',
    element: <HomePage />,
    layout: 'default',
    switch: ['auth', 'linked'],
  },
];
