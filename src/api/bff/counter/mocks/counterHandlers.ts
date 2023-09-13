import { FactoryAPI } from '@mswjs/data/lib/glossary';
import { baseUrl } from 'api/bff/bffApi';
import { factories } from 'api/config/mocks/apiDB';
import { generateUrl } from 'api/utils/generateUrl';
import { RequestHandler, rest } from 'msw';
import { getConfig } from 'setup/setup-fake-server/utils/setupConfig';
import { getEnvKey } from 'utils/functions/getEnvKey';


export const counterHandlers = (db: FactoryAPI<typeof factories>): Array<RequestHandler> => {
const handlers: Array<RequestHandler> = []

  const getName = 'getCounter'
  const get = rest.get(generateUrl(baseUrl,'/api/counter'), (req, res, { status, json: data, set: headers }) => {

    const name: string | null = req.url.searchParams.get('name');

    const { statusHttp } = getConfig(getName)
    let httpCode = statusHttp
    if (!name) {
      httpCode = '500';
    }
    switch (httpCode) {
      case '200':
        return res(
          status(200),
          headers({ 'Content-Type': 'application/json' }),
          data(
            db.counter.findFirst({
              where: {
                name: {
                  equals: name as string,
                },
              },
            }),
          ),
        );
      case '500':
        return res(status(500), data('An error occurred while fetching the on hold balance.'));
      default:
        return res(status(500), data('[MSW] An error occurred internally .'));
    }
  })
  const {isMock} = getConfig(getName)
  if(isMock){
    handlers.push(get)
  }

  return handlers;
};
