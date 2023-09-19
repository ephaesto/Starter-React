import { HomeRoutes } from './home/HomeRoutes';
import { LoginRoutes } from './login/LoginRoutes';
import { OnboardingRoutes } from './onboarding/OnboardingRoutes';
import { NoMatchRoutes } from './no-match/NoMatchRoutes';
import { OptionsRoutesPagesType } from './optionsRoutesPagesTypes';

export const optionsRoutesPages: OptionsRoutesPagesType = [
  ...HomeRoutes,
  ...LoginRoutes,
  ...OnboardingRoutes,
  ...NoMatchRoutes,
];
