import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { optionsRoutesLayouts } from 'layouts/optionsRoutesLayouts';
import { optionsRouteRoot } from 'pages/optionsRouteRoot';
import { optionsRoutesPages } from 'pages/optionsRoutesPages';
import { optionsRoutesSwitches } from 'switches/optionsRoutesSwitches';
import { listWrapper } from 'wrapper/listWrapper';
import { OptionsRoutesLayoutsType } from 'layouts/optionsRoutesLayoutsTypes';
import { OptionsRoutesPagesType } from 'pages/optionsRoutesPagesTypes';
import { OptionsRoutesSwitchesType } from 'switches/optionsRoutesSwitchesTypes';
import { IWrapperProps, ListWrapperType } from 'wrapper/listWrapperTypes';
import { createRouteObject } from './utils/createRouteObject';
import { DefaultRootObjectType } from './utils/types/DefaultRootObjectType';

export type RouteObjectType = {
  root: DefaultRootObjectType;
  pages: OptionsRoutesPagesType;
  layouts: OptionsRoutesLayoutsType;
  switches: OptionsRoutesSwitchesType;
  wrappers: ListWrapperType;
  wrapperProps: IWrapperProps;
};

const route = createRouteObject({
  root: optionsRouteRoot,
  pages: optionsRoutesPages,
  layouts: optionsRoutesLayouts,
  switches: optionsRoutesSwitches,
  wrappers: listWrapper,
});
const router = createBrowserRouter(route);

const Router = (): JSX.Element => {
  return <RouterProvider router={router} />;
};

export default Router;
