import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

interface ISetupQueryProps {
  children: React.ReactNode;
}

const SetupQuery = ({ children }: ISetupQueryProps): JSX.Element => {
  const queryClient = new QueryClient();

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};
export default SetupQuery;
