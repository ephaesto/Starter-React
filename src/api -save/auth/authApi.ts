import { queryBuilderGenerator } from 'api/utils/apiBuilder';
import { sendQuery } from 'api/utils/query';
import { IOptions, IQueryOptions, TypeQuery, TypeQueryBuilderGeneratorResult, TypeRequest } from 'api/utils/types';

const AUTH_BASE_URL = 'https://inliconnect-';

const baseQuery = async <TRequest extends TypeRequest, TResponse, TQuery extends TypeQuery, TError extends Error>(
  params: IQueryOptions<TRequest, TQuery, TError>,
): Promise<TResponse> => {
  return sendQuery<TResponse, TQuery, TRequest, TError>(params);
};

const baseOptions: IOptions = { headers: { 'Content-Type': 'text/xml' } };

export const bffApiQueryBuilder: TypeQueryBuilderGeneratorResult<Error> = queryBuilderGenerator({
  baseUrl: AUTH_BASE_URL,
  baseOptions,
  baseQuery,
});
