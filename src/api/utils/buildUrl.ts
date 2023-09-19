import qs from 'query-string';
import { TypeRequest } from './types';

/**
 * Set query parameters to an url
 * @param path target url
 * @param queryParameters map of key-value parameters
 * @returns url with query parameters added
 */
export const buildUrl = (path: RequestInfo, queryParameters?: TypeRequest): RequestInfo => {
  if (!queryParameters || !Object.keys(queryParameters)?.length) {
    return path;
  }

  const suffixUrlParameters = qs.stringify(queryParameters);
  return `${path}?${suffixUrlParameters}`;
};
