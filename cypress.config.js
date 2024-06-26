const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video:true,
  projectId: "tkxncx",
  //projectId: 'ufjium',

  reporter: 'cypress-mochawesome-reporter',
  e2e: {

    
    
    baseUrl: 'https://naveenautomationlabs.com/opencart/index.php?route=account/login',
    setupNodeEvents(on, config) {
      // implement node event listeners here

      require('@cypress/grep/src/plugin')(config);
      return config;

      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
  env:{
    URL:'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
  }
});
