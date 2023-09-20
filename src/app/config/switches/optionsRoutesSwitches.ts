import { OptionsRoutesSwitchesType } from './optionsRoutesSwitchesTypes';
import { SwitchAuthRoutes } from 'app/app-auth/switches/switch-auth/SwitchAuthRoutes';
import { SwitchLockAuthRoutes } from 'app/app-auth/switches/switch-lock-auth/SwitchLockAuthRoutes';
import { SwitchLinkedRoutes } from 'app/app-onboarding/switches/switch-linked/SwitchLinkedRoutes';
import { SwitchLockLinkedRoutes } from 'app/app-onboarding/switches/switch-lock-linked/SwitchLockLinkedRoutes';

export const optionsRoutesSwitches: OptionsRoutesSwitchesType = {
  authLock: SwitchLockAuthRoutes,
  auth: SwitchAuthRoutes,
  linkedLock: SwitchLockLinkedRoutes,
  linked: SwitchLinkedRoutes,
};
