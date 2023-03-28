import { createServer, Factory, Model, Server } from 'miragejs';
import { counterRoutes } from './api/counter/counterRoutes';
import { counters } from './api/counter/counterSeeds';
import { ICounter } from './api/counter/counterTypes';
import { MirageHttpCodesMocked, MirageRoutesMocked } from './MirageApiTypes';

const factories = {
  counters: Factory.extend<Partial<ICounter>>({}),
};

export type FactoryTypes = typeof factories;

const models = {
  counters: Model.extend<Partial<ICounter>>({}),
};
export type ModelTypes = typeof models;

type MirageTypes = {
  environment?: string;
  currentHttpCode?: MirageHttpCodesMocked;
  urlPrefix?: string;
  isRouteMocked?: MirageRoutesMocked;
  timing?: number;
};

export function fakeServer({
  environment = 'development',
  currentHttpCode = {},
  urlPrefix = '/',
  isRouteMocked = {},
  timing = 0,
}: MirageTypes): Server {
  const allRouteAreMockedByDefault: MirageRoutesMocked = {
    counter: {
      getCounter: true,
    },
  };
  const isMocked: MirageRoutesMocked = { ...allRouteAreMockedByDefault, ...isRouteMocked };

  const httpCodeByDefault: MirageHttpCodesMocked = {
    counter: {
      getCounter: '200',
    },
  };
  const httpCode: MirageHttpCodesMocked = { ...httpCodeByDefault, ...currentHttpCode };

  const server = createServer({
    environment,

    models,

    seeds(serverBeforSetup) {
      serverBeforSetup.db.loadData({
        counters,
      });
    },
  });

  if (urlPrefix) {
    server.urlPrefix = urlPrefix;
  }

  server.namespace = 'api';
  if (timing > 0) {
    server.timing = timing;
  }

  counterRoutes(server, httpCode.counter, isMocked.counter);

  return server;
}
