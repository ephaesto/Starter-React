
import SetupQuery from 'setups/query/SetupQuery';
import SetupFakeServer from 'setups/fake-server/SetupFakeServer';
import { setupContainers } from 'utils/components/nesting-container/setupContainers';

export const ListSetup = {
  fakeServer: SetupFakeServer,
  query: SetupQuery,
};

export const [ setups, orderSetups ] = setupContainers<typeof ListSetup>(ListSetup)

