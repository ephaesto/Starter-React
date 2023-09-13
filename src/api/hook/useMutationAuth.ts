import { useMutation as useTanMutation, UseMutationOptions, UseMutationResult } from '@tanstack/react-query';
import { checkAuthentication } from 'api/config/auth/checkAuthentication';
import { ICheckAuthentication, TypeError } from 'api/utils/types';
import { useNavigate } from 'react-router-dom';

export const useSetupMutationAuth =  (interCheckAuthentication: ICheckAuthentication) => <
  TData = unknown,
  TVariables = void,
  TContext = unknown,
>(
  options: UseMutationOptions<TData, TypeError, TVariables, TContext>,
): UseMutationResult<TData, TypeError, TVariables, TContext> => {
  const navigate = useNavigate();
  const { isError, error, ...query } = useTanMutation(options);
  if (isError) {
    interCheckAuthentication(navigate, error );
  }
  return { ...query, isError, error } as  UseMutationResult<TData, TypeError, TVariables, TContext>;
};

export const useMutationAuth = useSetupMutationAuth(checkAuthentication)
