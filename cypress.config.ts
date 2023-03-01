import {defineConfig} from 'cypress';

export default defineConfig({
  fileServerFolder: 'cypress/public',
  experimentalWebKitSupport: true,
  e2e: {
    supportFile: false
  }
});
