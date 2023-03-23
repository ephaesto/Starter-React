import { UseMutationOptions, UseMutationResult, UseQueryOptions, UseQueryResult } from '@tanstack/react-query';

export type TypeCacheTags = string[];
export type TypeRequest = Record<string, string> | undefined;

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

export interface IQueryOptions<TQueryParams extends TypeRequest> {
  path: string;
  queryParameters?: TQueryParams;
  options?: IOptions | undefined;
}

export interface IqueryBuilderGeneratorProps {
  baseUrl: string;
  baseOptions: IOptions;
  baseReactQueryOptions?: <TResponse>() => TOptionsByTypeQuery<TResponse>;
  baseQuery?: <TRequest extends TypeRequest, TResponse>(params: IQueryOptions<TRequest>) => Promise<TResponse>;
}
export type TypeUseQueryOptions<TResponse> = Omit<
  UseQueryOptions<TResponse, unknown, TResponse, TypeCacheTags>,
  'queryKey' | 'queryFn'
>;

export type TypeUseMutationOptions<TResponse> = Omit<
  UseMutationOptions<TResponse, unknown, unknown, unknown>,
  'mutationKey' | 'mutationFn'
>;

export interface TOptionsByTypeQuery<TResponse = unknown> {
  query: TypeUseQueryOptions<TResponse>;
  mutation: TypeUseMutationOptions<TResponse>;
}

export type TQueryBuilder<
  TRequest extends TypeRequest,
  TypeResponse,
  TypeQuery extends keyof TOptionsByTypeQuery<TypeResponse>,
> = Omit<IQueryDispatcherProps<TRequest, TypeResponse, TypeQuery>, 'baseProps'>;

export interface IQueryDispatcherProps<
  TRequest extends TypeRequest,
  TResponse,
  TypeQuery extends keyof TOptionsByTypeQuery<TResponse>,
> {
  queryOptions: Omit<IQueryOptions<TRequest>, 'queryParameters'>;
  baseProps: IqueryBuilderGeneratorProps;
  cacheTags?: string[];
  reactQueryOptions?: TOptionsByTypeQuery<TResponse>[TypeQuery];
  queryParameters?: TypeQuery extends 'query' ? TRequest : TypeRequest;
}

export type TQueryBuilderGeneratorResult = {
  useQuery<TRequest extends TypeRequest, TResponse>(
    params: TQueryBuilder<TRequest, TResponse, 'query'>,
  ): UseQueryResult<TResponse>;

  useMutation<TRequest extends TypeRequest, TResponse>(
    params: TQueryBuilder<TRequest, TResponse, 'mutation'>,
  ): UseMutationResult<TResponse>;
};
