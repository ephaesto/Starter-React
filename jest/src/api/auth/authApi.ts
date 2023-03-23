import { queryBuilderGenerator } from 'api/utils/apiBuilder';
import { sendQuery } from 'api/utils/query';
import { IOptions, IQueryOptions, TQueryBuilderGeneratorResult } from 'api/utils/types';

const AUTH_BASE_URL = 'hhtps://inliconnect-';

const baseQuery = async <TRequest extends Record<string, string>, TResponse>(
  params: IQueryOptions<TRequest>,
): Promise<TResponse> => {
  return sendQuery<TRequest, TResponse>(params);
};

const baseOptions: IOptions = { headers: { 'Content-Type': 'text/xml' } };

export const bffApiQueryBuilder: TQueryBuilderGeneratorResult = queryBuilderGenerator({
  baseUrl: AUTH_BASE_URL,
  baseOptions,
  baseQuery,
});
