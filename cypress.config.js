const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl : "https://staging.indigoemr.com",
    defaultCommandTimeout: 7000
  },
});
