import { defineConfig } from "cypress";

export default defineConfig({
  chromeWebSecurity: false,
  e2e: {
    baseUrl: 'https://www.fidelityinvestments.ie',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task',{
        log(message){
          console.log(message);
          return null;
        }
      })
    },
  },
});
