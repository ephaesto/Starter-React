import UnknownResponseErrors from 'errors/UnknownResponseErrors';
import { TypeRequest } from './types';

export type ConfigFetch = RequestInit & {
  params?: TypeRequest;
};

export const customFetch = async (
  path: RequestInfo,
  baseConfig: ConfigFetch,
  config: ConfigFetch,
): Promise<Response> => {
  const { params, ...init } = config;
  const response = await fetch(path, init);
  if (response.ok === true) {
    const result = await response.json();
    return result;
  }
  throw new UnknownResponseErrors('unknown error from fetch', 'fetchUnknownError', response);
};
