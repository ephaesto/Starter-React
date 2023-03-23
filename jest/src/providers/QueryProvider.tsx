import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

interface IQueryProviderProps {
  children: React.ReactNode;
}

const QueryProvider = ({ children }: IQueryProviderProps): JSX.Element => {
  const queryClient = new QueryClient();

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};
export default QueryProvider;
