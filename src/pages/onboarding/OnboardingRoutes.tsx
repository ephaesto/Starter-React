import { OptionsRoutesPagesType } from 'pages/optionsRoutesPagesTypes';
import OnboardingPage from './OnboardingPage';

export const OnboardingRoutes: OptionsRoutesPagesType = [
  {
    idRoute: 'onboarding',
    path: 'onboarding',
    element: <OnboardingPage />,
    switch: ['auth'],
  },
];
