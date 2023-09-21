import { useQueryClient } from '@tanstack/react-query';
import { useMutationAuth } from 'api/hook/useMutationAuth';
import { useQueryAuth } from 'api/hook/useQueryAuth';
import { Params, UseMutationResult, UseQueryResult } from 'api/utils/types';
import { bffMutation, bffQuery } from '../bffApi';
import { ICounter } from './counterTypes';

interface IParamsCounter extends Params {
  name: string;
}

export const useGetCounter = (params: IParamsCounter): UseQueryResult<ICounter> => {
  return useQueryAuth({ queryKey: ['tagOneCounter'] , queryFn: bffQuery<ICounter>(`/api/counter`, { params }) });
};

export const usePostCounter = (): UseMutationResult<ICounter>=> {
  const queryClient = useQueryClient()
  return useMutationAuth({ mutationFn: bffMutation<ICounter>(`/api/counter`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tagOneCounter'] })
    }
  });
};


