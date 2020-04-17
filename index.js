const commander = require('commander');
const Config = require('cordova-config');
const path = require('path');
commander
    .version('1.0.0', '-v, --version')
    .description('Create the app bundle')
    .usage('[OPTIONS]...')
    .option('--bundle-name <CFBundleDisplayName>', 'Set app display name that appears under the app icon')
    .option('--bundle-id <CFBundleIdentifier>', 'Set bundle id')
    .option('--ios-version <iosVersion>', 'Set the IOS version', '1.0.0')
    .option('--android-version <androidVersion>', 'Set the android version code', '1')
    .option('--ios-build-number <ios-CFBundleVersion>', 'Set the ios build number', '1')
    .option('--path-to-config <pathToConfig>', 'Path to config.xml', 'config.xml')
    .parse(process.argv);

    const configFilePath = commander.pathToConfig || 'config.xml'
    const sourcePath = process.env['BITRISE_SOURCE_DIR'] || './tmp'

    const config = new Config(path.join(sourcePath, configFilePath));

    if (commander.bundleName) {
      config.setName(`${commander.bundleName}`);
    }
    
    if (commander.bundleId) {
      config.setID(`${commander.bundleId}`);
    }
    
    if (commander.iosVersion) {
      config.setVersion(`${commander.iosVersion}`);
    }
    
    if (commander.androidVersion) {
      config.setAndroidVersionCode(`${commander.androidVersion}`);
    }
    
    // if (ANDROID_PACKAGE_NAME) {
    //   config.setAndroidPackageName(ANDROID_PACKAGE_NAME);
    
    //   log('android-packageName', ANDROID_PACKAGE_NAME);
    // }
    
    if (commander.iosBuildNumber) {
      config.setIOSBundleVersion(`${commander.iosBuildNumber}`);
    }
    
    // if (IOS_BUNDLE_IDENTIFIER) {
    //   config.setIOSBundleIdentifier(IOS_BUNDLE_IDENTIFIER);
    
    //   log('ios-CFBundleIdentifier', IOS_BUNDLE_IDENTIFIER);
    // }
    
    // Write the config file
    config.writeSync();
