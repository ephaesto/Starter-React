import { OptionsRoutesPagesType } from 'pages/optionsRoutesPagesTypes';
import NoMatch from './NoMatch';

export const NoMatchRoutes: OptionsRoutesPagesType = [
  {
    idRoute: 'nomatchlinked',
    path: ':noMatch*',
    element: <NoMatch />,
    layout: 'default',
    switch: ['auth', 'linked'],
  },
  {
    idRoute: 'nomatchauth',
    path: ':noMatch*',
    element: <NoMatch />,
    layout: 'auth',
    switch: ['auth'],
  },
];
