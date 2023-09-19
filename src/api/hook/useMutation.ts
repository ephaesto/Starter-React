import { useMutation as useTanMutation, UseMutationOptions, UseMutationResult } from '@tanstack/react-query';
import { TypeError } from 'api/utils/types';

export const useMutation = <
  TData = unknown,
  TVariables = void,
  TContext = unknown,
>(
  options: UseMutationOptions<TData, TypeError, TVariables, TContext>,
): UseMutationResult<TData, TypeError, TVariables, TContext> => {
  const { isError, error, ...query } = useTanMutation(options);
  return { ...query, isError, error } as  UseMutationResult<TData, TypeError, TVariables, TContext>;
};
