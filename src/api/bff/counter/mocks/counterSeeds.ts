import { FactoryAPI } from '@mswjs/data/lib/glossary';
import { factories } from 'api/mocker/apiDB';
import { ICounter } from '../counterTypes';

export const counters: ICounter[] = [
  { name: 'usain', count: 3 },
  { name: 'eric', count: 30 },
  { name: 'olga', count: 20 },
];

export const counterSeeds = (db: FactoryAPI<typeof factories>): void => {
  counters.forEach(counter => {
    db.counter.create(counter);
  });
};
