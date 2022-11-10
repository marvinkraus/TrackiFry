import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../Screens/Home';
import AddStation from '../Screens/AddStation';
import SavedRoutes from '../Screens/SavedRoutes';
const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="AddStation" component={AddStation} />
      <Stack.Screen name="SavedRoutes" component={SavedRoutes} />
    </Stack.Navigator>
  );
};
export {MainStackNavigator};
