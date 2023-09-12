import { UseMutationResult, UseQueryResult } from '@tanstack/react-query';
import { ICounter } from './counterTypes';
import { IErrorHttp, useBffApiQueryBuilder } from '../bffApi';

export const useGetTopCounter = (data: { region: string }): UseMutationResult<ICounter, IErrorHttp> =>
  useBffApiQueryBuilder.useMutation<{ region: string }, ICounter>({
    queryParameters: data,
    cacheTags: ['tagTopCounter'],
    queryOptions: { path: 'counter/top' },
  });

export const useGetCounter = (data: { name: string }): UseQueryResult<ICounter, IErrorHttp> => {
  const response = useBffApiQueryBuilder.useQuery<{ name: string }, ICounter>({
    queryParameters: data,
    cacheTags: ['tagOneCounter'],
    queryOptions: {
      path: 'counter',
      handleError: async (res: Response): Promise<IErrorHttp> => ({
        name: 'custom useGetCounter error',
        body: await res.text(),
        message: 'counter does not exist',
        status: 404,
        toString() {
          return 'player not found!';
        },
      }),
    },
  });
  return response;
};

export const useGetAllCounter = (): UseQueryResult<ICounter[], IErrorHttp> => {
  const response = useBffApiQueryBuilder.useQuery<undefined, ICounter[]>({
    cacheTags: ['tagAllCounter'],
    queryOptions: { path: '/counter' },
  });
  return response;
};

export const useSubscribeNewCounter = (data: { region: string; name: string }): UseMutationResult<null> => {
  const options = { body: data };
  const response = useBffApiQueryBuilder.useMutation<{ region: string; name: string }, null>({
    cacheTags: ['tagCounter'],
    queryOptions: { path: 'counter', options },
    queryParameters: undefined,
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

export const useMutationCounter = ({ name, ...body }: TReq): UseMutationResult<TRes> => {
  const cacheTags = ['addCounter'];
  const queryOptions = { path: '/counter', options: { body } };
  const queryParameters = { name };
  const reactQueryOptions = { retry: 3, retryDelay: 0 };

  const response = useBffApiQueryBuilder.useMutation<TReq, TRes>({
    cacheTags,
    queryOptions,
    queryParameters,
    tanStackOptions: reactQueryOptions,
  });

  if (response.data?.count) {
    response.data.count *= 2;
  }

  return response;
};
