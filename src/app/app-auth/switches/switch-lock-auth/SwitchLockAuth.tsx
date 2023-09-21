import { useState } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import Switch from 'utils/components/Switch';
import { initAuth, redirectPath } from '../switch-auth/SwitchAuth';

const SwitchLockAuth = (): JSX.Element => {
  const [isAuth] = useState(initAuth);
  const { pathname } = useLocation();

  return (
    <Switch>
      <Navigate data-caseswitch={isAuth && pathname === redirectPath} to="/" replace />
      <Outlet data-defaultswitch />
    </Switch>
  );
};

export default SwitchLockAuth;
