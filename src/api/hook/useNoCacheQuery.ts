import { useEffect, useState } from 'react';
import { ResponseQuery, TypeError, IUseNoCacheQuery, UseQueryResult } from 'api/utils/types';

export const useNoCacheQuery = <Fn extends () => Promise<ResponseQuery<Fn>>>(
  options: IUseNoCacheQuery<Fn>
): UseQueryResult<ResponseQuery<Fn>> => {
  const [data, setData] = useState<ResponseQuery<Fn>>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<TypeError | undefined>();
  const [isError, setIsError] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  useEffect(() => {
    const fetching = async () => {
      setIsLoading(true);
      try {
        const response = await options.queryFn();
        setIsSuccess(true);
        setData(response);
      } catch (err) {
        setIsError(true);
        setError(err as TypeError | undefined);
      } finally {
        setIsLoading(false);
      }
    };
    fetching();
  }, []);

  return {
    data,
    isLoading,
    error,
    isError,
    isSuccess,
  }
};
