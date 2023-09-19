import DefaultErrors from 'errors/DefaultErrors';
import HttpErrors from 'errors/HttpErrors';
import { UseBaseQueryResult, UseMutationResult as  QueryUseMutationResult} from '@tanstack/react-query';
import { NavigateFunction } from 'react-router-dom';

export type ICheckAuthentication = (navigate: NavigateFunction, error: TypeError | undefined) => void

export type Params = Record<string, string>;

export type TypeRequest = Params | undefined;

export type TypeError = HttpErrors | DefaultErrors;

export type ResponseQuery<Fn extends () => Promise<unknown>> = Awaited<ReturnType<Fn>>;
export type ResponseMutation<Fn extends (variables: Parameters<Fn>[0]) => Promise<unknown>> = Awaited<ReturnType<Fn>>;
export interface IUseNoCacheQueryReturn<
  TData = unknown,
  TError = unknown
> {
  data: TData | undefined;
  isLoading: boolean;
  error: TError | undefined;
  isError: boolean;
  isSuccess: boolean;
}

export interface IUseNoCacheMutationReturn<
  TData= any,
  TError = unknown,
  TVariables = TData,
> {
  mutate: (variables: TVariables) => void,
  mutateAsync: (variables: TVariables) => Promise<TData> | undefined,
  data: TData | undefined;
  isLoading: boolean;
  error: TError | undefined;
  isError: boolean;
  isSuccess: boolean;
}


export type UseMutationResult<
  TData,
  TError = unknown,
  TVariables = TData,
  TContext = unknown,
>  = QueryUseMutationResult<TData, TypeError, TVariables , TContext> | IUseNoCacheMutationReturn< TError, TypeError,TVariables>;


export type UseQueryResult<
  TData = unknown,
> = UseBaseQueryResult<TData, TypeError> | IUseNoCacheQueryReturn<TData, TypeError>

export interface IUseNoCacheQuery<Fn extends () => Promise<ResponseQuery<Fn>>> {
  queryFn: () => Promise<ResponseQuery<Fn>>;
}

export interface IUseNoCacheMutation<Fn extends (variables: Parameters<Fn>[0]) => Promise<ResponseMutation<Fn>>> {
  mutationFn: (variables: Parameters<Fn>[0]) => Promise<ResponseMutation<Fn>> | undefined;
}
