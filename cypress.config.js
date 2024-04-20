const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on('file:preprocessor', browserify.default(config));

  return config

}

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://staging.trymima.com/',
    viewportHeight: 960,
    viewportWidth: 1538,
    defaultCommandTimeout: 10000,
    chromeWebSecurity: false,
    watchForFileChanges: false,
    experimentalRunAllSpecs: true,
    specPattern: '**/*.feature',
    // env: {
    //   "MAILSLURP_API_KEY": "2fc2e35c789884f31b43bf8db3ce62ee4772947d802bdec20530b04e54fb21f4"
    // },
    setupNodeEvents,
  },
});
