import { FactoryAPI } from '@mswjs/data/lib/glossary';
import { counterHandlers } from 'api/bff/counter/mocks/counterHandlers';
import { RequestHandler } from 'msw';
import { factories } from './apiDB';

export const createHandlers = (db: FactoryAPI<typeof factories>): Array<RequestHandler> => [...counterHandlers(db)];
