import { useMutation, useQuery } from '@tanstack/react-query';
import { deepMerge } from 'utils';
import { mergeOptions, readQuery, sendQuery } from './query';
import {
  IqueryBuilderGeneratorProps,
  IQueryDispatcherProps,
  TQueryBuilder,
  TQueryBuilderGeneratorResult,
  TypeRequest,
  TypeUseMutationOptions,
  TypeUseQueryOptions,
} from './types';

const useQueryDispatcher = <TRequest extends TypeRequest, TResponse>({
  cacheTags = [],
  reactQueryOptions,
  baseProps,
  queryOptions,
  queryParameters,
}: IQueryDispatcherProps<TRequest, TResponse, 'query'>) => {
  const useQueryOptions = baseProps?.baseReactQueryOptions && baseProps?.baseReactQueryOptions<TResponse>()?.query;
  return useQuery(
    cacheTags,
    async (): Promise<TResponse> => {
      const queryOptionsMerged = mergeOptions({ baseProps, queryOptions: { ...queryOptions, queryParameters } });
      if (baseProps?.baseQuery) {
        return baseProps.baseQuery(queryOptionsMerged);
      }

      return readQuery<TRequest, TResponse>(queryOptionsMerged);
    },
    deepMerge<TypeUseQueryOptions<TResponse> | undefined>(reactQueryOptions, useQueryOptions),
  );
};

const useMutationDispatcher = <TRequest extends TypeRequest, TResponse>({
  cacheTags = [],
  reactQueryOptions,
  baseProps,
  queryOptions,
  queryParameters,
}: IQueryDispatcherProps<TRequest, TResponse, 'mutation'>) => {
  const useMutationOptions =
    baseProps?.baseReactQueryOptions && baseProps?.baseReactQueryOptions<TResponse>()?.mutation;
  return useMutation(
    cacheTags,
    async (): Promise<TResponse> => {
      const queryOptionsMerged = mergeOptions({
        baseProps,
        queryOptions: { ...queryOptions, queryParameters },
      });
      if (baseProps?.baseQuery) {
        return baseProps.baseQuery(queryOptionsMerged);
      }

      return sendQuery<TResponse>(queryOptionsMerged);
    },
    deepMerge<TypeUseMutationOptions<TResponse> | undefined>(reactQueryOptions, useMutationOptions),
  );
};

export const queryBuilderGenerator = (baseProps: IqueryBuilderGeneratorProps): TQueryBuilderGeneratorResult => {
  return {
    useQuery: <TRequest extends TypeRequest, TResponse>(params: TQueryBuilder<TRequest, TResponse, 'query'>) =>
      useQueryDispatcher<TRequest, TResponse>({
        baseProps,
        ...params,
      }),

    useMutation: params => useMutationDispatcher({ baseProps, ...params }),
  };
};
