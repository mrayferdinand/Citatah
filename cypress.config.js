const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // Dengan Mochawesome
  reporter: 'mochawesome',   // <--- Tambahkan di sini
  reporterOptions: {         // <--- Opsi konfigurasi Mochawesome
    reportDir: 'cypress/reports',
    overwrite: false,
    html: true,
    json: true
  },
  e2e: {
    baseUrl: 'https://citatah.co.id/',
    experimentalStudio: true,
    viewportWidth: 1920,
    viewportHeight: 1080,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
