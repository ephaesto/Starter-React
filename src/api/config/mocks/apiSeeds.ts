import { FactoryAPI } from '@mswjs/data/lib/glossary';
import { counterSeeds } from 'api/bff/counter/mocks/counterSeeds';
import { factories } from './apiDB';

export const createSeeds = (db: FactoryAPI<typeof factories>): void => {
  counterSeeds(db);
};
