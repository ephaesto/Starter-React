import { OmitChildrenRouteObject } from 'router/RouterTypes';
import LayoutOnboarding from './LayoutOnboarding';

export const LayoutOnboardingRoutes: OmitChildrenRouteObject = {
  path: 'onboarding',
  element: <LayoutOnboarding />,
};
