import { deepMerge } from 'utils';
import { IqueryBuilderGeneratorProps, IOptions, IQueryOptions, Method, TypeRequest } from './types';

export const buildUrl = (path: string, queryParameters?: TypeRequest): string => {
  if (!queryParameters || !Object.keys(queryParameters)?.length) {
    return path;
  }

  const suffixUrlParameters = Object.entries(queryParameters)
    .map(([key, value]: [string, string]) => `${key}=${value}`)
    .join('&');
  return `${path}?${suffixUrlParameters}`;
};

interface IMergeOptionsProps<TRequest extends TypeRequest> {
  baseProps: IqueryBuilderGeneratorProps;
  queryOptions: IQueryOptions<TRequest>;
}

export const mergeOptions = <TRequest extends TypeRequest>({
  baseProps: { baseUrl, baseOptions },
  queryOptions: { options: queryOptions, path, queryParameters },
}: IMergeOptionsProps<TRequest>): IQueryOptions<TRequest> => {
  const options: IOptions | undefined = deepMerge(queryOptions, baseOptions);

  return {
    path: `${baseUrl}/${path}`,
    options,
    queryParameters,
  };
};
export const sendQuery = async <TResponse, TRequest extends TypeRequest = TypeRequest>({
  path,
  queryParameters,
  options,
}: IQueryOptions<TRequest>): Promise<TResponse> => {
  const url = buildUrl(path, queryParameters);
  const body = options?.body ? JSON.stringify(options?.body) : undefined;
  const response = fetch(url, { ...options, body });
  return response as Promise<TResponse>;
};

export const readQuery = async <TRequest extends TypeRequest, TResponse>({
  options,
  ...queryOptions
}: IQueryOptions<TRequest>): Promise<TResponse> =>
  sendQuery({ ...queryOptions, options: { body: null, ...options, method: Method.GET } });
