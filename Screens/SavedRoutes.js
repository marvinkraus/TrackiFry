import React from 'react';
import {SafeAreaView, View} from 'react-native';
import BottomTab from '../components/BottomTab';

const SavedRoutes = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#253241'}}>
      <View>
        <BottomTab />
      </View>
    </SafeAreaView>
  );
};
export default SavedRoutes;
