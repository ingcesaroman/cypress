const { defineConfig } = require("cypress");

module.exports = defineConfig({
    projectId: "ck4o4y",
    // The rest of the Cypress config options go here...
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
