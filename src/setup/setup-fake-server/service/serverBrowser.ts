import { factory } from '@mswjs/data';
import { factories } from 'api/mocker/apiDB';
import { createHandlers } from 'api/mocker/apiHandlers';
import { createSeeds } from 'api/mocker/apiSeeds';
import { setupWorker } from 'msw';

const db = factory(factories);
createSeeds(db);
const server = setupWorker(...createHandlers(db));
server.start();
