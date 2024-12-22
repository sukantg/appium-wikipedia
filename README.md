Install webdriver IO on the command line : \
npm install --save-dev @wdio/cli

Install Appium Service for Webdriver IO : \
npm install --save-dev @wdio/appium-service

Install Appium Client: \
npm install appium

Open Android Studio & Start an emulator android device\
Verify its running:\
adb devices

Start Appium Server:\
appium

Run All Webdriver IO Tests on the Wikipedia App:\
npx wdio run wdio.conf.js
