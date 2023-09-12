import { customFetch } from 'api/utils/customFetch';
import { generateUrl } from 'api/utils/generateUrl';
import { getEnvKey } from 'utils/getEnvKey';

const baseUrl = getEnvKey('VITE_BFF_API');
const baseConfig = {
  method: 'GET',
  headers: {
    Accept: 'application/json',
  },
};

const bffQuery =
  <Res = unknown, Req = unknown>(path: string, data?: Req): (() => Promise<Res>) =>
  async () => {
    try {
      const url = generateUrl(baseUrl, path);
      const response = await customFetch(url, baseConfig, data);
      return response;
    } catch (error) {
      if (error) {
        throw error as Error;
      }
      throw Error('unknown error');
    }
  };
export default bffQuery;
