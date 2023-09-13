import { QueryKey, useQuery as useTanQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query';
import { TypeError } from 'api/utils/types';

export const useQuery = <
  TQueryFnData = unknown,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey,
>(
  options: Omit<UseQueryOptions<TQueryFnData, TypeError, TData, TQueryKey>, 'initialData'> &  {
    initialData: TQueryFnData | (() => TQueryFnData)
  },
): UseQueryResult<TData, TypeError> => {
  const { isError, error, ...query } = useTanQuery(options);
  return { ...query, isError, error } as UseQueryResult<TData, TypeError>;
};
