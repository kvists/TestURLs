# TestURLs
Cordova solution for testing access to external resources, i.e. google, facebook, wikipedia
Created with Cordova 5.1.1, Cordova Android 4.1.1.

Uses the cordova-plugin-whitelist.

Note: No meta tag for [Content-Security-Policy](http://content-security-policy.com) has been added.

Prerequisites:
 - [node](http://nodejs.org/)
```
$ npm install -g cordova
# cd to project folder
$ cordova plugin add cordova-plugin-whitelist

# Add platform
$ cordova platform add android

# Note: To update cordova android
$ cordova platform update android@4.1.1

# Build! (To deploy, add release-signing.properties and keystore to android directory)
$ cordova build android --release
```
