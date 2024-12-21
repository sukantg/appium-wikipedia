exports.config = {
    runner: 'local',
    specs: ['./test/specs/**/*.js'],
    capabilities: [
      {
        platformName: 'Android',
        'appium:platformVersion': '11', // Emulator version
        'appium:deviceName': 'emulator-5554', // Emulator name
        'appium:automationName': 'UiAutomator2',
        'appium:app': './app/WikipediaSample.apk',
        'appium:autoGrantPermissions': true,
      },
    ],
    services: ['appium'],
    framework: 'mocha', // Or Jasmine
    reporters: ['spec'],
    mochaOpts: {
      ui: 'bdd',
      timeout: 60000,
    },
  };  