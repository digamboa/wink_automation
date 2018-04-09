
const host = '0.0.0.0';   // default appium host
const port = 4723; 

const waitforTimeout = 30 * 60000;
const commandTimeout = 30 * 60000;

exports.config = {

    host: host,
    port: port,

specs: [
    './test/**.js'
],

maxInstances: 1,

    capabilities: [
        {
            appiumVersion: '1.7.2',                 // Appium module version
            browserName: '',                        // browser name is empty for native apps
            platformName: 'Android',
            app: '/Users/edercoronado/Documents/wink_automation/config/app-development-release.apk',          // Path to your native app
            platformVersion: '7.1.1',              // Android platform version of the device
            deviceName: 'Pixel API 25',              // device name of the mobile device
            waitforTimeout: waitforTimeout,
            commandTimeout: commandTimeout,
            newCommandTimeout: 30 * 60000,
            automationName: "UiAutomator2"
        }
    ],

    logLevel: 'verbose',
    coloredLogs : true,
    reporters: ['spec'],

services: ['appium'],
appium: {
    waitStartTime: 6000,
        waitforTimeout: waitforTimeout,
        command: 'appium',
        logFileName: 'appium.log',
        args: {
            address: host,
            port: port,
            commandTimeout: commandTimeout,
            sessionOverride: true,
            debugLogSpacing: true
        }
  },
framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 99999999
    },

    onPrepare: function () {
        console.log('<<< NATIVE APP TESTS STARTED >>>');
    },

}
