
exports.config = {

host: '0.0.0.0',
port: 4723,

specs: [
    './test/**.js'
],
services: ['appium'],
appium: {
    args: {
      address: '0.0.0.0',
      commandTimeout: '7200',
      sessionOverride: true,
      debugLogSpacing: true,
      platformVersion: '7.1.1',
      platformName: 'Android',
      showIosLog: true,
      deviceName: 'Pixel API 25',
      nativeInstrumentsLib: true,
      isolateSimDevice: true,
      app: './app-development-release.apk'
    }
  },
framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 99999999
    },

}
