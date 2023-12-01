const { defineConfig } = require('cypress')

module.exports = defineConfig({
  chromeWebSecurity: false,

  e2e: {
    
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'https://thoughtworks-jumpstart.github.io/react-simple-counter/',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  
}
})
