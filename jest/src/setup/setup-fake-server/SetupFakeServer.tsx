import { useEffect, useState } from 'react';
import { runServer } from './utils/runServer';

interface ISetupFakeServerProps {
  children: React.ReactNode;
}

const SetupFakeServer = ({ children }: ISetupFakeServerProps): JSX.Element => {
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    (async () => {
      await runServer('');
      setIsRunning(true);
    })();
  }, []);

  return <>{isRunning && children}</>;
};
export default SetupFakeServer;
