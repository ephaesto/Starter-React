import { OptionsRoutesPagesType } from 'app/config/pages/optionsRoutesPagesTypes';
import HelperPage from './HelperPage';

export const HelperRoutes: OptionsRoutesPagesType = [

  {
    idRoute: 'helper',
    path: '/helper',
    element: <HelperPage />,
    wrappers: ['tracking', 'scroll'],
    layout: 'default',
    switch: ['auth', 'linked'],
  },
];
