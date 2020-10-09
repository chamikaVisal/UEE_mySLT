import { Root } from 'native-base';
import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { StyleSheet, View } from 'react-native';
import { Asset } from 'expo-asset';
import { AppLoading } from 'expo';
// import { Container, Text } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';


import MYSLT from './app/index';
import RegPage from './app/registration';
import MainUI from './app/MainUI'
import Profile from './app/Profile'
import Manage from './app/Manage'
import History from './app/History'
import Promotions from './app/Promotions'
import PasswordchangeVisal from './app/PasswordchangeVisal'
import Promocode from './app/Promocode'
import FreeUsageChart from './app/FreeUsageChart'
import AddOnUsageChart from './app/AddOnUsageChart'
import AddMoreData from './app/AddMoreData'
import TotalUsageChart from './app/TotalUsageChart'
import ContactInfoChange from './app/ContactInfoChange'
import ViewDailyUsage from './app/ViewDailyUsage'
import MoreAddsHansi from './app/MoreAddsHansi'
import Selectregtype from './app/Selectregtype'
import Bonusdatausage from './app/Bonusdatausage'
import ExtraGB from './app/ExtraGBusage'
import MyProfile from './app/MyProfile'
import Accsettings from './app/AccountSettings'
import PurchaseHistory from './app/PurchaseHistory'
import AddNewUser from './app/AddNewUser'
import Giftdata from './app/GiftData'
import DataAddOns from './app/DataAddOns'
import Entertainment from './app/Entertainment'

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
  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
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

      <Root>

        <NavigationContainer>
          <Stack.Navigator initialRouteName="MYSLT">
            <Stack.Screen name="MYSLT"
              component={MYSLT}
              options={{ headerShown: false }} />

            <Stack.Screen name="RegPage"
              component={RegPage}
              options={{ headerShown: false }} />

            <Stack.Screen name="MainUI"
              component={MainUI}
              options={{
                headerShown: true,
                headerStyle: { backgroundColor: '#009eff' },
                headerTitleStyle: { color: '#ffffff', left: 40, right: 40 },
                title: 'Usage Summary'
              }} />

            <Stack.Screen name="Profile"
              component={Profile}
              options={{
                headerShown: true,
                headerStyle: { backgroundColor: '#009eff' },
                headerTitleStyle: { color: '#ffffff', left: 105, right: 80 },
                title: 'Profile'
              }} />

            <Stack.Screen name="Manage"
              component={Manage}
              options={{
                headerShown: true,
                headerStyle: { backgroundColor: '#009eff' },
                headerTitleStyle: { color: '#ffffff', left: 80, right: 80 },
                title: 'Manage'
              }} />

            <Stack.Screen name="History"
              component={History}
              options={{
                headerShown: false
              }} />

            <Stack.Screen name="Promotions"
              component={Promotions}
              options={{
                headerShown: true,
                headerStyle: { backgroundColor: '#009eff' },
                headerTitleStyle: { color: '#ffffff', left: 80, right: 60 },
                title: 'Promotions'
              }} />

            <Stack.Screen name="PasswordchangeVisal"
              component={PasswordchangeVisal}
              options={{
                headerShown: true,
                headerStyle: { backgroundColor: '#009eff' },
                headerTitleStyle: { color: '#ffffff', left: 30, right: 30 },
                title: 'Change Password'
              }} />

            <Stack.Screen name="Promocode"
              component={Promocode}
              options={{
                headerShown: true,
                headerStyle: { backgroundColor: '#009eff' },
                headerTitleStyle: { color: '#ffffff', left: 50, right: 50 },
                title: 'Promo Code'
              }} />

            <Stack.Screen name="FreeUsageChart"
              component={FreeUsageChart}
              options={{
                headerShown: true,
                headerStyle: { backgroundColor: '#009eff' },
                headerTitleStyle: { color: '#ffffff', left: 40, right: 40 },
                title: 'Free Data Usage'
              }} />

            <Stack.Screen name="AddOnUsageChart"
              component={AddOnUsageChart}
              options={{
                headerShown: true,
                headerStyle: { backgroundColor: '#009eff' },
                headerTitleStyle: { color: '#ffffff', left: 50, right: 50 },
                title: 'Add on Usage'
              }} />

            <Stack.Screen name="AddMoreData"
              component={AddMoreData}
              options={{
                headerShown: true,
                headerStyle: { backgroundColor: '#009eff' },
                headerTitleStyle: { color: '#ffffff', left: 40, right: 40 },
                title: 'Add More Data'
              }} />

            <Stack.Screen name="TotalUsageChart"
              component={TotalUsageChart}
              options={{ headerShown: false }}
            />

            <Stack.Screen name="ContactInfoChange"
              component={ContactInfoChange}
              options={{
                headerShown: true,
                headerStyle: { backgroundColor: '#009eff' },
                headerTitleStyle: { color: '#ffffff', left: 50, right: 50 },
                title: 'Change Contact Info'
              }}
            />

            <Stack.Screen name="ViewDailyUsage"
              component={ViewDailyUsage}
              options={{
                headerShown: true,
                headerStyle: { backgroundColor: '#009eff' },
                headerTitleStyle: { color: '#ffffff', left: 60, right: 60 },
                title: 'Daily Usage'
              }} />

            <Stack.Screen name="Selectregtype"
              component={Selectregtype}
              options={{ headerShown: false }}
            />

            <Stack.Screen name="Bonusdatausage"
              component={Bonusdatausage}
              options={{
                headerShown: true,
                headerStyle: { backgroundColor: '#009eff' },
                headerTitleStyle: { color: '#ffffff', left: 40, right: 40 },
                title: 'Bonus Data Usage'
              }}
            />

            <Stack.Screen name="MoreAddsHansi"
              component={MoreAddsHansi}
              options={{
                headerShown: true,
                headerStyle: { backgroundColor: '#009eff' },
                headerTitleStyle: { color: '#ffffff', left: 50, right: 50 },
                title: 'Advertisments'
              }}
            />

            <Stack.Screen name="ExtraGB"
              component={ExtraGB}
              options={{
                headerShown: true,
                headerStyle: { backgroundColor: '#009eff' },
                headerTitleStyle: { color: '#ffffff', left: 90, right: 70 },
                title: 'Extra GB'
              }}
            />

            <Stack.Screen name="MyProfile"
              component={MyProfile}
              options={{
                headerShown: true,
                headerStyle: { backgroundColor: '#009eff' },
                headerTitleStyle: { color: '#ffffff', left: 85, right: 70 },
                title: 'My Profile'
              }}
            />

            <Stack.Screen name="Accsettings"
              component={Accsettings}
              options={{
                headerShown: true,
                headerStyle: { backgroundColor: '#009eff' },
                headerTitleStyle: { color: '#ffffff', left: 55, right: 40 },
                title: 'Account Settings'
              }}
            />

            <Stack.Screen name="PurchaseHistory"
              component={PurchaseHistory}
              options={{
                headerShown: true,
                headerStyle: { backgroundColor: '#009eff' },
                headerTitleStyle: { color: '#ffffff', left: 40, right: 40 },
                title: 'Purchase HIstory'
              }}
            />

            <Stack.Screen name="AddNewUser"
              component={AddNewUser}
              options={{
                headerShown: true,
                headerStyle: { backgroundColor: '#009eff' },
                headerTitleStyle: { color: '#ffffff', left: 65, right: 50 },
                title: 'Add New User'
              }}
            />

            <Stack.Screen name="Giftdata"
              component={Giftdata}
              options={{
                headerShown: true,
                headerStyle: { backgroundColor: '#009eff' },
                headerTitleStyle: { color: '#ffffff', left: 90, right: 70 },
                title: 'Gift Data'
              }}
            />

            <Stack.Screen name="DataAddOns"
              component={DataAddOns}
              options={{
                headerShown: true,
                headerStyle: { backgroundColor: '#009eff' },
                headerTitleStyle: { color: '#ffffff', left: 70, right: 40 },
                title: 'Data Add-ons'
              }}
            />

            <Stack.Screen name="Entertainment"
              component={Entertainment}
              options={{
                headerShown: true,
                headerStyle: { backgroundColor: '#009eff' },
                headerTitleStyle: { color: '#ffffff', left: 70, right: 60 },
                title: 'Entertainment'
              }}
            />

            {/* <Stack.Screen name="UsageSummary" component={UsageSummary} />
          <Stack.Screen name="BottomNavigation" component={BottomNavigation} /> */}

          </Stack.Navigator>
        </NavigationContainer>
      </Root>

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
