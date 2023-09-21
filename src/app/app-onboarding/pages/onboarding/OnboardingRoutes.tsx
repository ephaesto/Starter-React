import { OptionsRoutesPagesType } from 'app/config/pages/optionsRoutesPagesTypes';
import OnboardingPage from './OnboardingPage';

export const OnboardingRoutes: OptionsRoutesPagesType = [
  {
    idRoute: 'onboarding',
    index: true,
    layout: 'onboarding',
    element: <OnboardingPage />,
    switch: ['auth', 'linkedLock'],
  },
];
