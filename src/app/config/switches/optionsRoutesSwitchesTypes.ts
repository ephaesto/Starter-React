import { OmitChildrenRouteObject } from 'router/RouterTypes';

export type OptionsRoutesSwitchesType = {
  authLock: OmitChildrenRouteObject,
  auth: OmitChildrenRouteObject;
  linkedLock: OmitChildrenRouteObject;
  linked: OmitChildrenRouteObject;
};
