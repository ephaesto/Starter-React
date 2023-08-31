import { primaryKey } from '@mswjs/data';

export const counterFactory = {
  name: primaryKey(String),
  count: Number,
};
