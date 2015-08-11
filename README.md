# TestURLs
Cordova solution for testing access to external resources, i.e. google, facebook, wikipedia. Possible to test custom URLs directly in app.

## Purpose
Was developed to confirm whether or not external resources is available via SSL in Android and iOS.

## Dev info
Created with Cordova 5.1.1, Cordova Android 4.1.1.

Uses the cordova-plugin-whitelist.

No meta tag for [Content-Security-Policy](http://content-security-policy.com) has been added.

##Prerequisites and Installation
 - [node](http://nodejs.org/)
 - [cordova](http://cordova.io/)
 - If building for Android: [Android SDK](https://developer.android.com/sdk/installing/index.html?pkg=studio)
```
# nodejs & npm
$ sudo apt-get install nodejs
$ sudo apt-get install npm

# cordova
$ sudo npm install -g cordova

# Note: If cordova can't be found, it could be due to a common misnaming error with node, try creating a symlink:
$ sudo ln -s /usr/bin/nodejs /usr/bin/node

# cordova plugins
$ cordova plugin add cordova-plugin-whitelist

# Add platform
$ cordova platform add android

# Note: To update cordova android
$ cordova platform update android@4.1.1

# Build! (To deploy, add release-signing.properties and keystore to android directory)
$ cordova build android --release
```
