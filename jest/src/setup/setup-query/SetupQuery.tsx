import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import defaultOptions from './defaultOptions';

interface ISetupQueryProps {
  children: React.ReactNode;
}

const SetupQuery = ({ children }: ISetupQueryProps): JSX.Element => {
  const queryClient = new QueryClient({ defaultOptions });

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};
export default SetupQuery;
