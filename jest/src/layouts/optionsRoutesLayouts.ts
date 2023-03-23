import { LayoutAuthRoutes } from './layout-auth/LayoutAuthRoutes';
import { LayoutDefaultRoutes } from './layout-default/LayoutDefaultRoutes';
import { OptionsRoutesLayoutsType } from './optionsRoutesLayoutsTypes';

export const optionsRoutesLayouts: OptionsRoutesLayoutsType = {
  default: LayoutDefaultRoutes,
  auth: LayoutAuthRoutes,
};
