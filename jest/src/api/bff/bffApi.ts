import { queryBuilderGenerator } from 'api/utils/apiBuilder';
import { IOptions, TQueryBuilderGeneratorResult } from 'api/utils/types';

const BFF_BASE_URL = '';

const options: IOptions = { headers: { 'Content-Type': 'application/json' } };

export const useBffApiQueryBuilder: TQueryBuilderGeneratorResult = queryBuilderGenerator({
  baseUrl: BFF_BASE_URL,
  baseOptions: options,
});
