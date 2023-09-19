import { useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Switch from 'utils/components/Switch';

const SwitchAuth = (): JSX.Element => {
  const [isAuth] = useState(true);

  return (
    <Switch>
      <Navigate data-caseswitch={!isAuth} to="/login" replace />
      <Outlet data-defaultswitch />
    </Switch>
  );
};

export default SwitchAuth;
