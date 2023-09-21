import { HomeRoutes } from 'app/app-my-app/pages/home/HomeRoutes';
import { NoMatchRoutes } from 'app/app-my-app/pages/no-match/NoMatchRoutes';
import { LoginRoutes } from 'app/app-auth/pages/login/LoginRoutes';
import { OnboardingRoutes } from 'app/app-onboarding/pages/onboarding/OnboardingRoutes';
import { NoMatchOnboardingRoutes } from 'app/app-onboarding/pages/no-match/NoMatchRoutes';
import { OptionsRoutesPagesType } from './optionsRoutesPagesTypes';

export const optionsRoutesPages: OptionsRoutesPagesType = [
  ...LoginRoutes,
  ...OnboardingRoutes,
  ...NoMatchOnboardingRoutes,
  ...HomeRoutes,
  ...NoMatchRoutes,
];
