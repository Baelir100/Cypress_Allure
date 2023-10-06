const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
// import allureWriter from "@shelex/cypress-allure-plugin/writer";

module.exports = defineConfig({
  projectId: '2323um',
  e2e: {
    setupNodeEvents(on, config) {
          allureWriter(on, config);
          return config;
    },
  },
});

