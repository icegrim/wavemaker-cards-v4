const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
 "publicPath": "./", // allow it to run from a folder
  // transpileDependencies: true,  // double checks dependencies - slows build
  productionSourceMap: false, // disable large source map files
  pwa : {
    name: 'My App',
    themeColor: '#611108',
    msTileColor: '#611108',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    workboxOptions: {
      "exclude": [
        ".htaccess"
      ]
    },
    manifestOptions :{
      "name": "Wavemaker Cards",
      "short_name": "Wavemaker",
      "theme_color": "#f00",
      "background_color": "#f00",
      "display": "standalone",
      "scope": "./",
      "start_url": "./"
    }
  }
})