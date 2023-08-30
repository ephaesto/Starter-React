import { OptionsRoutesSwitchesType } from './optionsRoutesSwitchesTypes';
import { SwitchAuthRoutes } from './switch-auth/SwitchAuthRoutes';
import { SwitchLinkedRoutes } from './switch-linked/SwitchLinkedRoutes';

export const optionsRoutesSwitches: OptionsRoutesSwitchesType = {
  auth: SwitchAuthRoutes,
  linked: SwitchLinkedRoutes,
};
