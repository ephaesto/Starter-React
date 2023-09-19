import { OptionsRoutesPagesType } from 'pages/optionsRoutesPagesTypes';
import NoMatch from './NoMatch';

export const NoMatchRoutes: OptionsRoutesPagesType = [
  {
    idRoute: 'noMatchLinked',
    path: ':noMatch*',
    element: <NoMatch />,
    layout: 'default',
    switch: ['auth', 'linked'],
  },
  {
    idRoute: 'noMatchAuth',
    path: ':noMatch*',
    element: <NoMatch />,
    layout: 'auth',
    switch: ['auth'],
  },
];
