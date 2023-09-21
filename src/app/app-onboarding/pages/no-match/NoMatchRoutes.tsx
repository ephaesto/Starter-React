import { OptionsRoutesPagesType } from 'app/config/pages/optionsRoutesPagesTypes';
import NoMatch from './NoMatch';

export const NoMatchOnboardingRoutes: OptionsRoutesPagesType = [
  {
    idRoute: 'noMatchLinked',
    path: '*',
    element: <NoMatch />,
    layout: 'onboarding',
    switch: ['auth', 'linkedLock'],
  },
];
