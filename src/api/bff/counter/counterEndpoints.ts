import { useQuery, UseQueryResult } from '@tanstack/react-query';
import qs from 'querystring';
import bffQuery from '../bffQuery';
import { ICounter } from './counterTypes';

export const useGetCounter = (data: { name: string }): UseQueryResult<ICounter> => {
  qs.stringify();
  return useQuery(['tagOneCounter'], bffQuery<ICounter>(`/api/counter?name=${data.name}`));
};
