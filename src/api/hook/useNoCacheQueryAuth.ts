import { checkAuthentication } from 'api/config/auth/checkAuthentication';
import { useNavigate } from 'react-router-dom';
import { ICheckAuthentication, IUseNoCacheQuery, ResponseQuery, UseQueryResult } from 'api/utils/types';
import { useNoCacheQuery } from './useNoCacheQuery';

export const useSetupNoCacheQueryAuth = (interCheckAuthentication: ICheckAuthentication ) => <Fn extends () => Promise<ResponseQuery<Fn>>>(
  options: IUseNoCacheQuery<Fn>
): UseQueryResult<ResponseQuery<Fn>> => {
  const navigate = useNavigate();
  const { isError, error, ...query } = useNoCacheQuery(options);
  if (isError) {
    interCheckAuthentication(navigate, error);
  }

  return { ...query, isError, error } as UseQueryResult<ResponseQuery<Fn>>;
};

export const useNoCacheQueryAuth =  useSetupNoCacheQueryAuth(checkAuthentication)
