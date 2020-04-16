const fs = require('fs');
const xml2js = require('xml2js');
const commander = require('commander');
const Config = require('cordova-config');
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

(() => {
    // const components = commander.bundleId.split('.');
    // const urlName = components[components.length - 1];
    // writeConfigXml(urlName);

    // writePackageJson(urlName);

    // createResources();

    const config = new Config(commander.pathToConfig);

    console.log('Name' + commander.bundleName);
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
    


})();

// function writeConfigXml(urlName) {
//     try {
//         console.log('Path: ' + commander.pathToConfig);
//         const xml = fs.readFileSync(commander.pathToConfig, 'utf8');

//         xml2js.parseString(xml, (err, obj) => {
//           console.log(commander.bundleId)
//             if ('Bundle id: ' + commander.bundleId) {
//               console.log(obj.widget.$.id);
//                 obj.widget.$.id = commander.bundleId;
//             }

//             if (commander.bundleName) {
//                 obj.widget.name[0] = commander.bundleName
//             }

//             if (commander.androidVersion) {
//                 obj.widget.$['android-versionCode'] = commander.androidVersion;
//             }

//             if (commander.iosVersion) {
//                 obj.widget.$['version'] = commander.iosVersion;
//             }

//             if (commander.iosBuildNumber) {
//                 obj.widget.$['ios-CFBundleVersion'] = commander.iosBuildNumber;
//             }

//             // Update values for deeplinks
//             const plugin = obj.widget.plugin.filter(elem => elem.$.name == 'ionic-plugin-deeplinks' && !!elem.variable)[0];
//             if (!!plugin) {
//                 let variable = plugin.variable.find(elem => elem.$.name == 'URL_SCHEME');
//                 if (!!variable) {
//                     variable.$['value'] = urlName;
//                 }
//             }

//             var builder = new xml2js.Builder();
//             var xml = builder.buildObject(obj);

//             console.log(`Updating config.xml file...`);
//             fs.writeFile(commander.pathToConfig, xml, function () {
//                 console.log('Successfully updated config.xml');
//             });
//         });
//     } catch (err) {
//         console.error(err);
//     }
// }

// function writePackageJson(urlName) {
//     try {
//         const packageJsonFile = fs.readFileSync('./package.json');
//         const package = JSON.parse(packageJsonFile);

//         package.cordova.plugins['ionic-plugin-deeplinks'].URL_SCHEME = urlName;

//         const data = JSON.stringify(package, null, 4);

//         console.log(`Updating package.json file...`);
//         fs.writeFile('./package.json', data, function () {
//             console.log('Successfully updated package.json');
//         });
//     } catch (err) {
//         console.error(err);
//     }
// }

// function createResources() {
//     const resourceDir = 'resources-src';
//     try {
//         console.log(`Generating resources and saving to "../resources"`);
//         res.run(resourceDir, '/')
//     } catch (err) {
//         console.error(err);
//     }
// }
