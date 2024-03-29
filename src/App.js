import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { LoginButton, AccessToken } from 'react-native-fbsdk';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n Shake or press menu button for dev menu',
});

const App = () => (
  <View style={styles.container}>
    <Text style={styles.welcome}>Welcome to React Native!</Text>
    <Text style={styles.instructions}>To get started, edit App.js</Text>
    <Text style={styles.instructions}>{instructions}</Text>
    <LoginButton
      onLoginFinished={(error, result) => {
        console.info('result', result);
        if (error) {
          console.info(`login has error: ${result.error}`);
        } else if (result.isCancelled) {
          console.info('login is cancelled by user.');
        } else {
          AccessToken.getCurrentAccessToken().then(data => {
            console.info('data', data);
            console.info('Logged in');
          });
        }
      }}
      onLogoutFinished={() => console.info('Logged out')}
    />
  </View>
);

export default App;
