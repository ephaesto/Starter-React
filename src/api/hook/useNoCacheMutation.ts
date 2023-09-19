import {useState } from 'react';
import { ResponseMutation, TypeError, IUseNoCacheMutation, UseMutationResult } from 'api/utils/types';

export const useNoCacheMutation = <Fn extends (variables: Parameters<Fn>[0]) => Promise<ResponseMutation<Fn>>>(
  options: IUseNoCacheMutation<Fn>
): UseMutationResult<ResponseMutation<Fn>,Parameters<Fn>[0]> => {
  const [data, setData] = useState<ResponseMutation<Fn>>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<TypeError | undefined>();
  const [isError, setIsError] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);


  const mutateAsync = async (variables: Parameters<Fn>[0]): Promise<Awaited<ReturnType<Fn>> | undefined> => {
    setIsLoading(true);
    try {
      const response: Promise<ResponseMutation<Fn>>| undefined = await options.mutationFn(variables);
      setIsSuccess(true);
      setData(await response);
      return response
    } catch (err) {
      setIsError(true);
      setError(err as TypeError | undefined);
    } finally {
      setIsLoading(false);
    }
  };

  const mutate = (variables: Parameters<Fn>[0]): void => {
    mutateAsync(variables)
  };



  return {
    mutate,
    mutateAsync,
    data,
    isLoading,
    error,
    isError,
    isSuccess,
  }
};
