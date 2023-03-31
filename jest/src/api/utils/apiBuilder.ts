import { useMutation, useQuery } from '@tanstack/react-query';
import { recDeepMergeAll } from 'utils/deepMergeObjects';
import { mergeOptions, readQuery, sendQuery } from './query';
import {
  IqueryBuilderGeneratorProps,
  IQueryDispatcherProps,
  TypeQueryBuilder,
  TypeQueryBuilderGeneratorResult,
  TypeRequest,
  TypeUseMutationOptions,
  TypeUseQueryOptions,
} from './types';

/**
 *  Endpoint to send query (read) using tanstack-query
 * @param param0 endpoint params
 * @returns response state of endpoint
 */
const useQueryDispatcher = <TRequest extends TypeRequest, TResponse, TError extends Error>({
  cacheTags = [],
  tanStackOptions,
  baseProps,
  queryOptions,
  queryParameters,
}: IQueryDispatcherProps<TRequest, TResponse, 'query', TError>) => {
  const baseTanStackReadOptions = baseProps?.baseTanStackQueryOptions && baseProps?.baseTanStackQueryOptions.queries;
  return useQuery(
    cacheTags,
    async (): Promise<TResponse> => {
      const queryOptionsMerged = mergeOptions({
        baseProps,
        queryOptions: { ...queryOptions, queryParameters },
      });
      if (baseProps?.baseQuery) {
        return baseProps.baseQuery(queryOptionsMerged);
      }

      return readQuery<TRequest, TResponse, TError>(queryOptionsMerged);
    },
    recDeepMergeAll<TypeUseQueryOptions<TResponse, TError> | undefined>(tanStackOptions, baseTanStackReadOptions),
  );
};

/**
 *  Endpoint to send query (mutation) using tanstack-query
 * @param param0 endpoint params
 * @returns response state of endpoint
 */
const useMutationDispatcher = <TRequest extends TypeRequest, TResponse, TError extends Error>({
  cacheTags = [],
  tanStackOptions,
  baseProps,
  queryOptions,
  queryParameters,
}: IQueryDispatcherProps<TRequest, TResponse, 'mutation', TError>) => {
  const baseTanStackMutationOptions =
    baseProps?.baseTanStackQueryOptions && baseProps?.baseTanStackQueryOptions?.mutations;
  return useMutation(
    cacheTags,
    async (): Promise<TResponse> => {
      const queryOptionsMerged = mergeOptions<TRequest, 'mutation', TError>({
        baseProps,
        queryOptions: { ...queryOptions, queryParameters },
      });
      if (baseProps?.baseQuery) {
        return baseProps.baseQuery(queryOptionsMerged);
      }

      return sendQuery<TResponse, 'mutation', TRequest, TError>(queryOptionsMerged);
    },
    recDeepMergeAll<TypeUseMutationOptions<TResponse, TError> | undefined>(
      tanStackOptions,
      baseTanStackMutationOptions,
    ),
  );
};

/**
 *  Generate query builder which aim to create endpoints
 * @param baseProps API options
 * @returns object with two methods to send query (read and mutation)
 */
export const queryBuilderGenerator = <TError extends Error>(
  baseProps: IqueryBuilderGeneratorProps<TError>,
): TypeQueryBuilderGeneratorResult<TError> => {
  return {
    useQuery: <TRequest extends TypeRequest, TResponse>(
      params: TypeQueryBuilder<TRequest, TResponse, 'query', TError>,
    ) =>
      useQueryDispatcher<TRequest, TResponse, TError>({
        baseProps,
        ...params,
      }),

    useMutation: params => useMutationDispatcher({ baseProps, ...params }),
  };
};
