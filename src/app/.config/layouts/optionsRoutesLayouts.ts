import { LayoutAuthRoutes } from 'app/app-auth/layouts/LayoutAuthRoutes';
import { LayoutDefaultRoutes } from 'app/app-my-app/layouts/LayoutDefaultRoutes';
import { LayoutOnboardingRoutes } from 'app/app-onboarding/layouts/LayoutOnboardingRoutes';
import { OptionsRoutesLayoutsType } from './optionsRoutesLayoutsTypes';

export const optionsRoutesLayouts: OptionsRoutesLayoutsType = {
  auth: LayoutAuthRoutes,
  onboarding: LayoutOnboardingRoutes,
  default: LayoutDefaultRoutes,
};
