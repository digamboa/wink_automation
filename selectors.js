module.exports = {
  create_account_button : 'android=new UiSelector().text("ABRÍ UNA CUENTA")',
  wink_main_window : 'android=new UiSelector().resourceId("android:id/content")',
  message_welcome : 'android=new UiSelector().text("¿QUERÉS SER DE L@S\nPRIMER@S EN USAR WINK?")',
  input_email : 'android=new UiSelector().className("android.widget.EditText")',
  send_email_button : 'android=new UiSelector().text("GUARDAR E-MAIL")',
  number_beta_participant : 'android=new UiSelector().text("#3")',
  beta_main_view : 'android=new UiSelector().className("android.view.View")',
  input_email_main_window : 'android=new UiSelector().className("android.widget.EditText").instance(0)',
  input_password_main_window : 'android=new UiSelector().className("android.widget.EditText").instance(1)'
};