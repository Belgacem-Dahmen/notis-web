import { defineConfig } from 'cypress';

const baseUrl = 'http://localhost:4200/';
export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: baseUrl,
    viewportWidth: 1920,
    viewportHeight: 1233,
    screenshotOnRunFailure: false,
    retries: {
      runMode: 1,
      openMode: 0,
    },
    env: {
      CYPRESS_BASE_URL: baseUrl,
    },
  },
});
