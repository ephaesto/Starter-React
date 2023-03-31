import { queryBuilderGenerator } from 'api/utils/apiBuilder';
import { sendQuery } from 'api/utils/query';
import { IOptions, IQueryOptions, TypeQueryBuilderGeneratorResult, TypeRequest } from 'api/utils/types';

const AUTH_BASE_URL = 'hhtps://inliconnect-';

const baseQuery = async <TRequest extends TypeRequest, TResponse>(
  params: IQueryOptions<TRequest>,
): Promise<TResponse> => {
  return sendQuery<TResponse, TRequest>(params);
};

const baseOptions: IOptions = { headers: { 'Content-Type': 'text/xml' } };

export const bffApiQueryBuilder: TypeQueryBuilderGeneratorResult = queryBuilderGenerator({
  baseUrl: AUTH_BASE_URL,
  baseOptions,
  baseQuery,
});
