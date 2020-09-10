import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



import { StyleSheet, Text, View } from 'react-native';
import { Asset } from 'expo-asset';
import { AppLoading } from 'expo';


import MYSLT from './app/index';
import RegPage from './app/registration';
import MainUI from './app/MainUI'
import Profile from './app/Profile'


const Stack = createStackNavigator()



function cacheImages(images) {
  return images.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}
//const Stack = createStackNavigator();
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      isReady: false
    }

  }
  async _loadAssetsAsync() {
    const imageAssets = cacheImages([
      require('./assets/bg.jpg'),
    ]);
    await Promise.all([...imageAssets]);
  }
  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this._loadAssetsAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    }
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="MYSLT">
          <Stack.Screen name="MYSLT" component={MYSLT} options={{ headerShown: false }} />
          <Stack.Screen name="RegPage" component={RegPage} options={{ headerShown: false }} />
          <Stack.Screen name="MainUI" component={MainUI} options={{ headerShown: false }} />
          <Stack.Screen name="Profile" component={Profile} />

          {/* <Stack.Screen name="UsageSummary" component={UsageSummary} />
          <Stack.Screen name="BottomNavigation" component={BottomNavigation} /> */}

        </Stack.Navigator>
      </NavigationContainer>

    )
  }

}

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
