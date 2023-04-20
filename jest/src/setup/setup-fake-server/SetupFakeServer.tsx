import { createContext, useContext, useEffect, useState } from 'react';
import { runServer } from './utils/runServer';

export interface IFakeServer {
  nativeFetch: (input: RequestInfo | URL, init?: RequestInit | undefined) => Promise<Response>;
}

const fakeServerRepesentation: IFakeServer = {
  nativeFetch: fetch,
};

export const FakeServerContext = createContext(fakeServerRepesentation);

interface IEnvironmentProviderProps {
  children: React.ReactNode;
}
const SetupFakeServer = ({ children }: IEnvironmentProviderProps): JSX.Element => {
  const [fakeServer, setFakeServer] = useState<IFakeServer>();
  const [isRunning, setIsRunning] = useState(false);
  useEffect(() => {
    setFakeServer({ nativeFetch: fetch });
    const loadFakeServer = async () => {
      await runServer('');
      setIsRunning(true);
    };

    loadFakeServer();
  }, []);

  return (
    <>
      {isRunning && (
        <FakeServerContext.Provider value={fakeServer as IFakeServer}>{children}</FakeServerContext.Provider>
      )}
    </>
  );
};

export default SetupFakeServer;

export const useFakeServer = (): IFakeServer => useContext(FakeServerContext);
