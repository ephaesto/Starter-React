import { OptionsRoutesPagesType } from 'pages/optionsRoutesPagesTypes';
import HomePage from './HomePage';

export const HomeRoutes: OptionsRoutesPagesType = [
  {
    idRoute: 'valide',
    path: 'teste',
    element: <HomePage />,
    layout: 'auth',
    switch: ['auth', 'linked'],
  },
  {
    idRoute: 'home',
    index: true,
    element: <HomePage />,
    wrapper: ['traking', 'scroll'],
    layout: ['default', 'auth'],
    switch: ['auth', 'linked'],
  },
  {
    idRoute: 'valide',
    path: 'valide',
    element: <HomePage />,
    layout: 'default',
    switch: ['auth', 'linked'],
  },
];
