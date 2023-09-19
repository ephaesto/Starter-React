import { factory } from "@mswjs/data";
import { factories } from "api/config/mocks/apiDB";
import { createHandlers } from "api/config/mocks/apiHandlers";
import { setupServer } from "msw/node";
import { testConfig } from "tests/config/mocks/testConfig";
import { initMockConfig, setConfig } from "../utils/setupConfig";

export const db = factory(factories);
initMockConfig({
  isMock: true,
  statusHttp: '200'
});
setConfig(testConfig)
export const server = setupServer(...createHandlers(db));
// beforeAll(() => server.listen());
// afterAll(() => server.close());
