import HelperPage from './HelperPage';
import { OptionsRoutesPagesType } from 'app/.config/pages/optionsRoutesPagesTypes';

export const HelperRoutes: OptionsRoutesPagesType = [

  {
    idRoute: 'helper',
    path: '/helper',
    element: <HelperPage />,
    wrappers: ['tracking', 'scroll'],
    layout: 'default',
    switch: ['auth', 'linked'],
  }
];
