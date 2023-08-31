import { factory } from '@mswjs/data';
import { factories } from 'api/mocker/apiDB';
import { createHandlers } from 'api/mocker/apiHandlers';
import { setupServer } from 'msw/node';

export const db = factory(factories);
export const server = setupServer(...createHandlers(db));
// beforeAll(() => server.listen());
// afterAll(() => server.close());
