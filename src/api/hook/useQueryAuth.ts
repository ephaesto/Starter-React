import { QueryKey, useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query';
import { checkAuthentication } from 'api/config/auth/checkAuthentication';
import { useNavigate } from 'react-router-dom';
import { ICheckAuthentication, TypeError } from 'api/utils/types';

export const useSetupQueryAuth = (interCheckAuthentication: ICheckAuthentication) => <
  TQueryFnData = unknown,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey,
>(
  options: Omit<UseQueryOptions<TQueryFnData, TypeError, TData, TQueryKey>, 'initialData'> & {
    initialData?: () => undefined;
  },
): UseQueryResult<TData, TypeError> => {
  const navigate = useNavigate();
  const { isError, error, ...query } = useQuery(options);
  if (isError) {
    interCheckAuthentication(navigate, error );
  }

  return { ...query, isError, error } as UseQueryResult<TData, TypeError>;
};

export const useQueryAuth = useSetupQueryAuth(checkAuthentication)
