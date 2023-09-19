import { ConfigFetch, customFetch } from 'api/utils/customFetch';
import { generateUrl } from 'api/utils/generateUrl';
import { checkHttpError } from 'api/utils/checkHttpError';
import DefaultErrors from 'errors/DefaultErrors';
import HttpErrors from 'errors/HttpErrors';
import { getEnvKey } from 'utils/functions/getEnvKey';
import { pathToSuffix } from 'api/utils/pathToSuffix';
import { recDeepMergeAll } from 'utils/functions/deepMergeObjects';

const prefix = 'Auth-';
const baseUrl = getEnvKey('VITE_AUTH_API');
const baseGetConfig = {
  method: 'GET',
  headers: {
    Accept: 'application/json',
  },
};

const basePostConfig = {
  method: 'POST',
};
type PartialConf<TBody> = Partial<ConfigFetch<TBody>>;

export const authQuery =
  <Response, TBody = Response,>
  (path: string,
    config?: PartialConf<TBody>,
    newBaseConfig?: PartialConf<TBody>
    ): (() => Promise<Response>) =>
  async () => {
    try {
      const url = generateUrl(baseUrl, path);
      const baseConfig = recDeepMergeAll<PartialConf<TBody>>(baseGetConfig, newBaseConfig);
      const response = await customFetch<Response, TBody>(url, baseConfig, config);
      return response;
    } catch (err) {
      const { isHttpError, error } = checkHttpError(err);
      if (isHttpError) {
        throw new HttpErrors(error.message, `${prefix}HttpError${pathToSuffix(path)}`, error.status);
      }
      throw new DefaultErrors(error.message, `${prefix}UnknownApiError${pathToSuffix(path)}`);
    }
  };

export const authMutation = <
  Response,
  TBody = Response
>(
  path: string,
  config?:Omit<Partial<ConfigFetch<TBody>>,'body'>
): ((body:TBody) => Promise<Response>) =>(body) => {
  return authQuery<Response, TBody>(path, {...config, body}, basePostConfig )()
}
