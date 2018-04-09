const wdio = require('webdriverio');
const selectors = require('../selectors');
const assert = require('assert');

    describe('WINK', function(){

      it('Should display the welcome message', function() {
        browser.click(selectors.wink_main_window);
        assert(browser.isVisible(selectors.message_welcome, true));
      })

      //Look for correct property to verify you can´t click the button when there is no email
      it('Save email button should be disabled', function(){
        assert(browser.isEnabled(selectors.send_email_button))
      })

      it('Should insert the email', function() {
        browser.touchAction(selectors.input_email, 'tap');
        browser.setValue(selectors.input_email, "didier@holawink.com");
        assert(browser.getText(selectors.input_email),"didier@holawink.com")
      })

      it('Should display the thank you message', function(){
        browser.click(selectors.send_email_button);
        browser.waitForText(selectors.number_beta_participant, 6000);
        assert(browser.getText(selectors.number_beta_participant), "#3");
      })

      it('Should close and relaunch the app', function(){
        browser.closeApp();
        browser.startActivity('com.fintechla.wink','com.fintechla.wink.MainActivity');
        browser.click(selectors.wink_main_window);
      })
      it('Should insert text to email and password', function(){
        browser.setValue(selectors.input_email_main_window, 'didier@holawink.com');
        browser.setValue(selectors.input_password_main_window, 'tests');
      })

    });