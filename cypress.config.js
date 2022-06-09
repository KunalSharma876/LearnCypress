const { defineConfig } = require("cypress");
const path = require("path");
const fs = require("fs-extra");

module.exports = defineConfig({
  projectId: 'gatmif',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      const file = config.env.configFile || "prod";
      const pathToConfigFile = path.resolve(
        ".",
        "cypress/config/env",
        `${file}.json`
      );
      return fs.readJson(pathToConfigFile);
    },
  },
});
