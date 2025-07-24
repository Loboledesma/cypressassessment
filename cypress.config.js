const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.laboratoriodetesting.com',
    setupNodeEvents(on, config) {
      
    },
  },
});


