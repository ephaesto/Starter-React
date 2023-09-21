import { OptionsRoutesPagesType } from 'app/config/pages/optionsRoutesPagesTypes';
import LoginPage from './LoginPage';

export const LoginRoutes: OptionsRoutesPagesType = [
  {
    idRoute: 'login',
    index: true,
    layout: 'auth',
    switch: 'authLock',
    element: <LoginPage />,
  },
];
