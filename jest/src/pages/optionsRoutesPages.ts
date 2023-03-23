import { HomeRoutes } from './home/HomeRoutes';
import { LoginRoutes } from './login/LoginRoutes';
import { OnbordingRoutes } from './onbording/OnbordingRoutes';
import { NoMatchRoutes } from './no-match/NoMatchRoutes';
import { OptionsRoutesPagesType } from './optionsRoutesPagesTypes';

export const optionsRoutesPages: OptionsRoutesPagesType = [
  ...HomeRoutes,
  ...LoginRoutes,
  ...OnbordingRoutes,
  ...NoMatchRoutes,
];
