import { OptionsRoutesPagesType } from 'app/config/pages/optionsRoutesPagesTypes';
import NoMatch from './NoMatch';

export const NoMatchRoutes: OptionsRoutesPagesType = [
  {
    idRoute: 'noMatch',
    path: '*',
    element: <NoMatch />,
    layout: 'default',
    switch: ['auth', 'linked'],
  },

];
