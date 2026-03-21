import { defineConfig } from "cypress";
import allureWriter from '@shelex/cypress-allure-plugin/writer';

export default defineConfig({
  allowCypressEnv: true,

  e2e: {
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      // implement node event listeners here
    },
  },
});
