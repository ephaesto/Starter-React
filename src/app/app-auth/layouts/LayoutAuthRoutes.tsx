import { OmitChildrenRouteObject } from 'router/RouterTypes';
import LayoutAuth from './LayoutAuth';

export const LayoutAuthRoutes: OmitChildrenRouteObject = {
  path: 'login',
  element: <LayoutAuth />,
};
