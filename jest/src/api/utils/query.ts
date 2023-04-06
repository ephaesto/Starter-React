import { recDeepMergeAll } from 'utils/deepMergeObjects';
import {
  IMergeOptionsProps,
  IOptions,
  IQueryOptions,
  Method,
  TypeHandlerError,
  TypeHandlerResponse,
  TypeQuery,
  TypeRequest,
} from './types';

/**
 * Trim an url, removing `/` at the beggining and at the end of the string.
 * @param url a string represent url or partial path
 * @returns substring of url
 */
const trimSlashUrl = (url: string): string => {
  const urlLength = url.length;
  if (urlLength < 2) {
    return url.replace('/', '');
  }

  const { startIndex, endIndex } = {
    startIndex: url.indexOf('/') === 0 ? 1 : 0,
    endIndex: url.lastIndexOf('/') === urlLength - 1 ? urlLength - 2 : undefined,
  };
  return url.substring(startIndex, endIndex);
};

/**
 *  Check is an url is absolute or not.
 * @param url a string represent url or partial path
 * @returns true is its absolute, else false
 */
const isAbsoluteUrl = (url: string): boolean => url.startsWith('http://') || url.startsWith('https://');

/**
 * Generate url from a baseurl and a path : a concatenate url or path if path is an absolute url
 * @param baseUrl string of a base url
 * @param path string of a partial path or absolute url
 * @returns string of generated url
 */
const generateUrl = (baseUrl: string, path: string): string =>
  isAbsoluteUrl(path) ? path : `${trimSlashUrl(baseUrl)}/${trimSlashUrl(path)}`;

/**
 * Set query parameters to an url
 * @param path target url
 * @param queryParameters map of key-value parameters
 * @returns url with queryparameters added
 */
export const buildUrl = (path: string, queryParameters?: TypeRequest): string => {
  if (!queryParameters || !Object.keys(queryParameters)?.length) {
    return path;
  }

  const suffixUrlParameters = Object.entries(queryParameters)
    .map(([key, value]: [string, string]) => `${key}=${value}`)
    .join('&');
  return `${path}?${suffixUrlParameters}`;
};

/**
 * Merge options erasing base options by query options
 * @param param0 base options and query options
 * @returns merge options object
 */
export const mergeOptions = <TRequest extends TypeRequest, TQuery extends TypeQuery, TError extends Error>({
  baseProps: { baseUrl, baseOptions, baseHandleError, baseHandleResponse },
  queryOptions: {
    queryParameters,
    path: queryPath,
    options: queryOptions,
    handleError: queryHandleError,
    handleResponse: queryHandleResponse,
  },
}: IMergeOptionsProps<TRequest, TQuery, TError>): IQueryOptions<TRequest, TQuery, TError> => {
  const options = recDeepMergeAll<IOptions | undefined>(baseOptions, queryOptions);
  const handleError = queryHandleError || baseHandleError;
  const handleResponse = queryHandleResponse || baseHandleResponse;
  const path = generateUrl(baseUrl, queryPath);

  return { path, options, queryParameters, handleError, handleResponse };
};

/**
 *
 * @param response http response
 * @returns throw error of response
 */
const defaultErrorHandler: TypeHandlerError = async (response: Response) => {
  return new Error(await response.text());
};

const manageResponse = async <TResponse, TError extends Error>(
  response: Response,
  handleResponse?: TypeHandlerResponse,
  handleError?: TypeHandlerError<TError>,
): Promise<TResponse> => {
  if (response.ok) {
    return (handleResponse instanceof Function && handleResponse(response)) || response.json();
  }
  const error: Promise<Error> =
    (handleError instanceof Function && handleError(response)) || defaultErrorHandler(response);
  throw await error;
};

/**
 *  Send generic query with fetch
 * @param param0 options of request
 * @returns a respond promise with Type Response selected
 */
export const sendQuery = async <
  TResponse,
  TQuery extends TypeQuery,
  TRequest extends TypeRequest = TypeRequest,
  TError extends Error = Error,
>({
  path,
  queryParameters,
  options,
  handleResponse,
  handleError,
}: IQueryOptions<TRequest, TQuery, TError>): Promise<TResponse> => {
  const url = buildUrl(path, queryParameters);
  const body = options?.body ? JSON.stringify(options?.body) : undefined;
  const manageResponseHttp = async (value: Response): Promise<TResponse> =>
    manageResponse<TResponse, TError>(value, handleResponse, handleError);

  const response = fetch(url, { ...options, body });
  return response.then(manageResponseHttp);
};

/**
 *  Send read query with fetch
 * @param param0 options of request
 * @returns a respond promise with Type Response selected
 */
export const readQuery = async <TRequest extends TypeRequest, TResponse, TError extends Error = Error>({
  options,
  ...queryOptions
}: IQueryOptions<TRequest, 'query', TError>): Promise<TResponse> =>
  sendQuery<TResponse, 'mutation', TRequest, TError>({
    ...queryOptions,
    options: { body: null, ...options, method: Method.GET },
  });
