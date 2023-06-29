import { ListSetupType } from './ListSetupType';
import SetupFakeServer from './setup-fake-server/SetupFakeServer';
import SetupQuery from './setup-query/SetupQuery';

export const ListSetup: ListSetupType = {
  fakeServer: SetupFakeServer,
  query: SetupQuery,
};

export const ListOrderSetup: (keyof ListSetupType)[] = Object.keys(ListSetup) as (keyof ListSetupType)[];
