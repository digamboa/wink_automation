const wdio = require('webdriverio');
const selectors = require('./selectors');
const assert = require('assert');

/* const opts = {
    port: 4723,
    desiredCapabilities: {
      platformName: "Android",
      platformVersion: "7.1.1",
      deviceName: "Pixel API 25",
      app: "/Users/edercoronado/Documents/wink_automation/app-development-release.apk",
      automationName: "UiAutomator2"
    }
  };
  
  const client = wdio.remote(opts); */
  
  /* client
    .init()
    .click(selectors.wink_main_window)
    .click(selectors.create_account_button)
    .waitForText(selectors.continue_button_create_account, 3000)
    .click(selectors.continue_button_create_account)
    .waitForText(selectors.create_account_message, 3000)
    .touchAction(selectors.input_name_registration, 'tap')
    .setValue(selectors.input_name_registration_keyboard_open, "Test")
    .touchAction(selectors.input_lastName_registration_keyboard_open, 'tap')
    .setValue(selectors.input_lastName_registration_keyboard_open, "Test2")
    .touchAction(selectors.input_secondLastName_registration_keyboard_open, 'tap')
    .setValue(selectors.input_secondLastName_registration_keyboard_open, "Test3")
    .hideDeviceKeyboard('tapOutside')
    .click(selectors.next_create_account_button)
    .waitForText(selectors.create_account_email_message, 3000)
    .touchAction(selectors.input_create_account_email, 'tap')
    .setValue(selectors.input_create_account_email, "test@test.com")
    .click(selectors.next_create_account_email_button); */

    describe('WINK', () => {

      it('Test', () => {
        client.client(selectors.create_account_button);
      })
    });