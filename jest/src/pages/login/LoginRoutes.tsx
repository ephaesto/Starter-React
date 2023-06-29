import { OptionsRoutesPagesType } from 'pages/optionsRoutesPagesTypes';
import LoginPage from './LoginPage';

export const LoginRoutes: OptionsRoutesPagesType = [
  {
    idRoute: 'login',
    path: 'login',
    element: <LoginPage />,
  },
  {
    idRoute: 'login',
    path: 'login',
    layout: 'auth',
    element: <LoginPage />,
  },
];
