import { useState } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import Switch from 'utils/components/Switch';

export const redirectPath = "/login"
export const initAuth = true
const SwitchAuth = (): JSX.Element => {
  const [isAuth] = useState(initAuth);

  return (
    <Switch>
      <Navigate data-caseswitch={!isAuth} to={redirectPath} replace />
      <Outlet data-defaultswitch />
    </Switch>
  );
};

export default SwitchAuth;
