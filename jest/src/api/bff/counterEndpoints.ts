import { UseMutationResult, UseQueryResult } from '@tanstack/react-query';
import { TQueryBuilder } from 'api/utils/types';
import { useBffApiQueryBuilder } from './bffApi';

export const useGetTopCounter = (data: { region: string }): UseMutationResult<{ name: string; count: number }> =>
  useBffApiQueryBuilder.useMutation<{ region: string }, { name: string; count: number }>({
    queryParameters: data,
    cacheTags: ['tagTopCounter'],
    queryOptions: { path: 'counter/top' },
  });

export const useGetCounter = (data: { name: string }): UseQueryResult<{ name: string; count: number }> => {
  const response = useBffApiQueryBuilder.useQuery<{ name: string }, { name: string; count: number }>({
    queryParameters: data,
    cacheTags: ['tagCounter'],
    queryOptions: { path: '/counter' },
  });
  return response;
};

export const useGetAllCounter = (): UseQueryResult<{ name: string; count: number }> => {
  const response = useBffApiQueryBuilder.useQuery<{ name: string }, { name: string; count: number }>({
    cacheTags: ['tagCounter'],
    queryOptions: { path: '/counter' },
  });
  return response;
};

export const useGetCounter2 = (): UseQueryResult<null> => {
  const response = useBffApiQueryBuilder.useQuery<undefined, null>({
    cacheTags: ['tagCounter'],
    queryOptions: { path: '/counter' },
  });
  return response;
};

interface TReq extends Record<string, string> {
  name: string;
  region: string;
  count: string;
}
interface TRes {
  name: string;
  count: number;
}

const mockCallBack = (): void => {};
export const useMutationCounter = ({ name, ...body }: TReq): UseMutationResult<TRes> => {
  const options: TQueryBuilder<TReq, TRes, 'mutation'> = {
    cacheTags: ['addCounter'],
    queryOptions: { path: '/counter', options: { body } },
    queryParameters: { name },
  };

  let response = useBffApiQueryBuilder.useMutation<TReq, TRes>(options);

  response = {
    ...response,
    reset() {
      mockCallBack();
      response.reset();
    },
  };

  return response;
};
