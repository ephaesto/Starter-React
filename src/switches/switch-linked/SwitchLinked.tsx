import { useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Switch from 'utils/components/Switch';

const SwitchLinked = (): JSX.Element => {
  const [isValidState] = useState(true);

  return (
    <Switch>
      <Navigate data-caseswitch={!isValidState} to="/unbording" replace />
      <Outlet data-defaultswitch />
    </Switch>
  );
};

export default SwitchLinked;
