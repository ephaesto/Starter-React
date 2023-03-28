import { runServer } from './utils/runServer';

interface ISetupFakeServerProps {
  children: React.ReactNode;
}

const SetupFakeServer = ({ children }: ISetupFakeServerProps): JSX.Element => {
  runServer('');

  return <>{children}</>;
};
export default SetupFakeServer;
