import {
  DefaultOptions,
  UseMutationOptions,
  UseMutationResult,
  UseQueryOptions,
  UseQueryResult,
} from '@tanstack/react-query';

export type TypeCacheTags = string[];
export type TypeRequest = Record<string, string> | undefined;
export type TypeQuery = keyof TypeOptionsByTypeQuery<unknown>;
export type TypeHandlerError<TError extends Error = Error> = (response: Response) => Promise<TError>;
export type TypeHandlerResponse = (response: Response) => Promise<Response>;

export enum Method {
  GET = 'GET',
  PUT = 'PUT',
  POST = 'POST',
  DELETE = 'DELETE',
}

export interface IOptions {
  headers?: Record<string, string>;
  body?: Record<string, unknown> | null;
  method?: Method;
}

export interface IQueryOptions<TQueryParams extends TypeRequest, TQuery extends TypeQuery, TError extends Error> {
  path: string;
  queryParameters?: TQuery extends 'query' ? TQueryParams : TypeRequest;
  options?: IOptions | undefined;
  handleResponse?: TypeHandlerResponse;
  handleError?: TypeHandlerError<TError>;
}

export interface IqueryBuilderGeneratorProps<TError extends Error> {
  baseUrl: string;
  baseOptions: IOptions;
  baseTanStackQueryOptions?: DefaultOptions;
  baseQuery?: <TRequest extends TypeRequest, TResponse, TQuery extends TypeQuery>(
    params: IQueryOptions<TRequest, TQuery, TError>,
  ) => Promise<TResponse>;
  baseHandleResponse?: TypeHandlerResponse;
  baseHandleError?: TypeHandlerError<TError>;
}

export type TypeUseQueryOptions<TResponse, TError = unknown> = Omit<
  UseQueryOptions<TResponse, TError, TResponse, TypeCacheTags>,
  'queryKey' | 'queryFn'
>;

export type TypeUseMutationOptions<TResponse, TError = unknown> = Omit<
  UseMutationOptions<TResponse, TError, unknown, unknown>,
  'mutationKey' | 'mutationFn'
>;

export interface TypeOptionsByTypeQuery<TResponse = unknown> {
  query?: TypeUseQueryOptions<TResponse>;
  mutation?: TypeUseMutationOptions<TResponse>;
}

export type TypeQueryBuilder<
  TRequest extends TypeRequest,
  TResponse,
  TQuery extends TypeQuery,
  TError extends Error,
> = Omit<IQueryDispatcherProps<TRequest, TResponse, TQuery, TError>, 'baseProps'>;

export interface IQueryDispatcherProps<
  TRequest extends TypeRequest,
  TResponse,
  TQuery extends TypeQuery,
  TError extends Error,
> {
  queryOptions: Omit<IQueryOptions<TRequest, TQuery, TError>, 'queryParameters'>;
  baseProps: IqueryBuilderGeneratorProps<TError>;
  cacheTags?: string[];
  tanStackOptions?: TypeOptionsByTypeQuery<TResponse>[TQuery];
  queryParameters?: TQuery extends 'query' ? TRequest : TypeRequest;
}

export type TypeQueryBuilderGeneratorResult<TError extends Error> = {
  useQuery<TRequest extends TypeRequest, TResponse>(
    params: TypeQueryBuilder<TRequest, TResponse, 'query', TError>,
  ): UseQueryResult<TResponse, TError>;

  useMutation<TRequest extends TypeRequest, TResponse>(
    params: TypeQueryBuilder<TRequest, TResponse, 'mutation', TError>,
  ): UseMutationResult<TResponse, TError, unknown, unknown>;
};

export interface IMergeOptionsProps<TRequest extends TypeRequest, TQuery extends TypeQuery, TError extends Error> {
  baseProps: IqueryBuilderGeneratorProps<TError>;
  queryOptions: IQueryOptions<TRequest, TQuery, TError>;
}
