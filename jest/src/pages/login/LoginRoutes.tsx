import { OptionsRoutesPagesType } from 'pages/optionsRoutesPagesTypes';
import LoginPage from './LoginPage';

export const LoginRoutes: OptionsRoutesPagesType = [
  {
    path: 'login',
    element: <LoginPage />,
  },
  {
    path: 'login',
    layout: 'auth',
    element: <LoginPage />,
  },
];
