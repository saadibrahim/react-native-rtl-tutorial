import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import './src/i18n';

import Home from './src/pages/Home';
import Inner from './src/pages/Inner';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Inner" component={Inner} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
