import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {MainStackNavigator} from './Navigator/StackNavigator';
import 'react-native-gesture-handler';

const App = () => {
  return (
    <NavigationContainer>
      <MainStackNavigator />
    </NavigationContainer>
  );
};
export default App;
