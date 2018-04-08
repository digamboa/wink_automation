const wdio = require('webdriverio');
var selectors = require('./selectors');

const opts = {
    port: 4723,
    desiredCapabilities: {
      platformName: "Android",
      platformVersion: "8.0",
      deviceName: "Nexus 6 API 26",
      app: "/Users/diegogamboa/app-development-release.apk",
      automationName: "UiAutomator2"
    }
  };
  
  const client = wdio.remote(opts);
  
  client
    .init()
    .click(selectors.wink_main_window);