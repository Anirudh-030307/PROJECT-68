import React from 'react';
import { View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import { Header } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import fb from './Screens/fb';
import In from './Screens/in'

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaProvider>
      <View style={{ color: 'white',flex:1 }}> 
        <Header
            backgroundColor="blue"
            centerComponent={{
              text: 'BUZZ APP',
              style: {
                color: 'black',
              },
            }}
          /> 
        <AppContainer/>
      </View>
      </SafeAreaProvider>

    );
  }
}
const   TabNavigator =createBottomTabNavigator({ 
  fb : fb,
  in : In,
})
const AppContainer = createAppContainer(
  TabNavigator
)