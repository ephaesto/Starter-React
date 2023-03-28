import { FactoryTypes, ModelTypes } from 'api-mock/MirageApi';
import { MirageHttpCodeMocked, MirageRouteMocked } from 'api-mock/MirageApiTypes';
import { Registry, Response, Server } from 'miragejs';

export const counterRoutes = (
  server: Server<Registry<ModelTypes, FactoryTypes>>,
  httpCode: MirageHttpCodeMocked,
  isMocked: MirageRouteMocked,
): Response | void => {
  if (isMocked.getCounter) {
    server.get('/counter', (schema, request) => {
      const { name } = request.queryParams;
      switch (httpCode.getCounter) {
        case '200':
          return new Response(200, { 'Content-Type': 'application/json' }, schema.findBy('counters', { name })?.attrs);
        case '500':
          return new Response(500, {}, 'An error occurred while fetching the on hold balance.');
        default:
          return new Response(500, {}, '[Miragejs] An error occurred internally .');
      }
    });
  }
};
