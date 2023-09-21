import { useState } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import Switch from 'utils/components/Switch';
import { pathToRedirect } from 'utils/functions/pathToRedirect';

export const redirectPath = "/onboarding"
export const initValidState = true
const SwitchLinked = (): JSX.Element => {
  const [isValidState] = useState(initValidState);
  const {pathname} = useLocation();

  return (
    <Switch>
      <Navigate data-caseswitch={!isValidState} to={pathToRedirect(pathname, redirectPath)} replace />
      <Outlet data-defaultswitch />
    </Switch>
  );
};

export default SwitchLinked;
