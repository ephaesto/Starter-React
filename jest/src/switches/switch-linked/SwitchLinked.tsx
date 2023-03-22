import { useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Switch from 'components/utils/Switch';

const SwitchLinked = (): JSX.Element => {
  const [isValideState] = useState(true);

  return (
    <Switch>
      <Navigate data-caseswitch={!isValideState} to="/unbording" replace />
      <Outlet data-defaultswitch />
    </Switch>
  );
};

export default SwitchLinked;
