import { useState } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import Switch from 'utils/components/Switch';
import { isPathToRedirect } from 'utils/functions/isPathToRedirect copy';
import { initValidState,  redirectPath} from '../switch-linked/SwitchLinked';

const SwitchLockLinked = (): JSX.Element => {
  const [isValidState] = useState(initValidState);
  const { pathname } = useLocation();

  return (
    <Switch>
      <Navigate data-caseswitch={isValidState && isPathToRedirect(pathname,redirectPath)} to="/" replace />
      <Outlet data-defaultswitch />
    </Switch>
  );
};

export default SwitchLockLinked;
