import { OptionsRoutesPagesType } from 'app/config/pages/optionsRoutesPagesTypes';
import HomePage from './HomePage';

export const HomeRoutes: OptionsRoutesPagesType = [

  {
    idRoute: 'home',
    index: true,
    element: <HomePage />,
    wrappers: ['tracking', 'scroll'],
    layout: 'default',
    switch: ['auth', 'linked'],
  },
];
