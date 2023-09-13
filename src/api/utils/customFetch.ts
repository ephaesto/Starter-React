import UnknownResponseErrors from 'errors/UnknownResponseErrors';
import { recDeepMergeAll } from 'utils/functions/deepMergeObjects';
import { buildUrl } from './buildUrl';
import { TypeRequest } from './types';

export type ConfigFetch<TBody> = Omit<RequestInit, 'body'> & {
  params?: TypeRequest;
  body?:TBody
};

export const customFetch = async <Response, TBody = Response>(
  path: RequestInfo,
  { params: baseParams, ...baseConfig }: ConfigFetch<TBody>,
  config?: ConfigFetch<TBody>,
): Promise<Response> => {
  let params = {} as TypeRequest;
  let initConfig = {};
  if (config) {
    const { params: confParams, ...otherConf } = config;
    params = confParams;
    initConfig = otherConf;
  }
  const init = recDeepMergeAll<RequestInit>(baseConfig, initConfig);
  const response = await fetch(buildUrl(path, { ...baseParams, ...params }), init);
  if (response.ok === true) {
    const result = await response.json();
    return result;
  }
  throw new UnknownResponseErrors('unknown error from fetch', 'fetchUnknownError', response);
};
