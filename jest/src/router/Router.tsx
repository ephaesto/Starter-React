import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { optionsRoutesLayouts } from 'layouts/optionsRoutesLayouts';
import { optionsRouteRoot } from 'pages/optionsRouteRoot';
import { optionsRoutesPages } from 'pages/optionsRoutesPages';
import { optionsRoutesSwitches } from 'switches/optionsRoutesSwitches';
import { createRouteObject } from './utils/createRouteObject';

const route = createRouteObject({
  root: optionsRouteRoot,
  pages: optionsRoutesPages,
  layouts: optionsRoutesLayouts,
  switches: optionsRoutesSwitches,
});
const router = createBrowserRouter(route);

const Router = (): JSX.Element => {
  return <RouterProvider router={router} />;
};

export default Router;
