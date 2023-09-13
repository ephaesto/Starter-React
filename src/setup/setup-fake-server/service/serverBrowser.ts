import { factory } from '@mswjs/data';
import { factories } from 'api/config/mocks/apiDB';
import { createHandlers } from 'api/config/mocks/apiHandlers';
import { createSeeds } from 'api/config/mocks/apiSeeds';

import { setupWorker } from 'msw';
import { initMockConfig, setConfig } from '../utils/setupConfig';

const db = factory(factories);
createSeeds(db);
initMockConfig()
const server = setupWorker(...createHandlers(db));
server.start();
