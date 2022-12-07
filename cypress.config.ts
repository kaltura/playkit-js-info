import {defineConfig} from 'cypress';

export default defineConfig({
  fileServerFolder: 'cypress/test-files',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  }
});
