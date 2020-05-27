# React Native RTL Layout Tutorial Demo App

Files for React Native Right to Left layout and Arabic translation tutorial.

Tutorial URL: https://www.youtube.com/watch?v=-x9sHrkzRyw

Blog Post: https://saadibrah.im/add-internationalization-and-right-to-left-layout-support-to-your-react-native-app-using-react-i18next/

#### Libraries or tools used

 * React Native v0.62
 * React Navigation v5
 * react-18next
 * react-native-restart

#### Useful links

 * [Post on React Native blog talking about RTL support](https://reactnative.dev/blog/2016/08/19/right-to-left-support-for-react-native-apps)
 * [i18next documentation](https://www.i18next.com/)
 * [react-18next documentation](https://react.i18next.com/)
 * [Fallback principles](https://www.i18next.com/principles/fallback)
 * [react-native-restart](https://github.com/avishayil/react-native-restart)
 * [React Navigation documentation](https://reactnavigation.org/)

#### Running the app in simulator

To run the app you need yarn package manager. Once you have yarn installed, clone the repo and navigate to it's directory in terminal and run the following commands:

 ```sh
 ## to install the dependencies
 yarn
 ## to run the app on iOS
 cd ios/ && pod install && cd ..
 react-native run-ios
 ## to run the app on Android
 react-native run-android
 ```

#### Screenshots:

![iOS React Native LTR/RTL English/Arabic](/screenshots/ios-translated.png)

![Android React Native LTR/RTL English/Arabic](/screenshots/android-translated.png)