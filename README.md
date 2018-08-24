# GoFa Auth

This is a [React Native](https://facebook.github.io/react-native/) app base project intend to be a base for Facebook and Google authentication.

## Facebook Configurations

You will need to create a new [Facebook App](https://developers.facebook.com/apps) or use an existing one

### Setup a new Facebook App

I'm assuming you are creating a new app. If you want use an existing app just ensure that all steps match

1. Go to [Facebook App](https://developers.facebook.com/apps) and click on `Add New App`. And supply
   the `Display Name` and `Contact Email`

1. When created. Go to `Settings` > `Basic` and go down on page until you reach the `+ Add Platform` button and click on it

1. Select `iOS` Platform

1. Supply the `Bundle ID`. This information can be retrieved on `ios/gofa.xcodeproj`. Open it on xCode click on `gofa` project it is on `General` > `Identity` > `Bundle Identifier`

1. Tick the `Single Sign On` switcher and `Save Changes`

### Make our app configs

Now lets make all changes in the project. Still on the Facebook app page

1. Click on `Quick Start` button

1. `Download SDK` to your machine and unzip it

1. Copy the `Bolts.framework`, `FBSDKCoreKit.framework`, `FBSDKLoginKit.framework`, `FBSDKShareKit.framework` to your projects `ios/Frameworks`

1. On `info.plist` file you need to change your where are `YOUR_FB_APP_ID` you should put your `App ID`

---

Now just make an awesome project

Enjoy It 😉
