import { FactoryAPI } from '@mswjs/data/lib/glossary';
import { factories } from 'api/mocker/apiDB';
import { RequestHandler, rest } from 'msw';

export const counterHandlers = (db: FactoryAPI<typeof factories>): Array<RequestHandler> => [
  rest.get('/api/counter', (req, res, { status, json: data, set: headers }) => {
    const httpCode = { getCounter: '200' };
    const name = req.url.searchParams.get('name');
    if (!name) {
      httpCode.getCounter = '500';
    }
    switch (httpCode.getCounter) {
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
  }),
];
