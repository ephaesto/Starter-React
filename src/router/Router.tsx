import { optionsRoutesLayouts } from 'app/.config/layouts/optionsRoutesLayouts';
import { OptionsRoutesLayoutsType } from 'app/.config/layouts/optionsRoutesLayoutsTypes';
import { optionsRouteRoot } from 'app/.config/pages/optionsRouteRoot';
import { optionsRoutesPages } from 'app/.config/pages/optionsRoutesPages';
import { OptionsRoutesPagesType } from 'app/.config/pages/optionsRoutesPagesTypes';
import { optionsRoutesSwitches } from 'app/.config/switches/optionsRoutesSwitches';
import { OptionsRoutesSwitchesType } from 'app/.config/switches/optionsRoutesSwitchesTypes';
import { listWrapper } from 'app/.config/wrapper/listWrapper';
import { IWrapperProps, ListWrapperType } from 'app/.config/wrapper/listWrapperTypes';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createRouteObject } from './utils/createRouteObject';
import { DefaultRootObjectType } from './utils/types/DefaultRootObjectType';
import { addWrappers } from './utils/addWrappers';

export type RouteObjectType = {
  root: DefaultRootObjectType;
  pages: OptionsRoutesPagesType;
  layouts: OptionsRoutesLayoutsType;
  switches: OptionsRoutesSwitchesType;
  wrappers: ListWrapperType;
  wrapperProps: IWrapperProps;
};

const routes = addWrappers<WrappersType>(pages, listWrapper);

const nestedRoutes = createRouteObject(routes);

const router = createBrowserRouter(nestedRoutes);

const Router = (): JSX.Element => {
  return <RouterProvider router={router} />;
};

export default Router;
