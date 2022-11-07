import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../Screens/Home';
import AddStation from '../Screens/AddStation';
const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="AddStation" component={AddStation} />
    </Stack.Navigator>
  );
};
export {MainStackNavigator};
