import { queryBuilderGenerator } from 'api/utils/apiBuilder';
import { IOptions, TypeQueryBuilderGeneratorResult } from 'api/utils/types';

export interface IErrorHttp extends Error {
  status: number;
  body: string;
  toString: () => string;
}
const BFF_BASE_URL = '/api';

const baseUrl = BFF_BASE_URL;
const baseOptions: IOptions = { headers: { 'Content-Type': 'application/json', Accept: 'application/json' } };
const baseHandleError = async (response: Response): Promise<IErrorHttp> => ({
  status: response.status,
  body: await response.text(),
  message: response.statusText,
  name: 'Error http BFF',
  toString: () => `Une erreur est survenue : ${response.status} ${response.statusText}`,
});

export const useBffApiQueryBuilder: TypeQueryBuilderGeneratorResult<IErrorHttp> = queryBuilderGenerator<IErrorHttp>({
  baseUrl,
  baseOptions,
  baseHandleError,
});
