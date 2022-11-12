import React from 'react';
import {SafeAreaView, StyleSheet, View, Alert, Text} from 'react-native';
import {IconButton} from '@react-native-material/core';
import Icon from 'react-native-vector-icons/FontAwesome5';
import BottomTab from '../components/BottomTab';
import Geolocation from '@react-native-community/geolocation';
import MapHomeScreen from '../components/Map';

function parsing(pos) {
  let result = {};
  const obj = JSON.stringify(pos);
  const json = JSON.parse(obj);
  //result.id = 24345;
  result.time = json.timestamp;
  result.latitude = json.coords.latitude;
  result.longitude = json.coords.longitude;

  //console.log('json:' + result.time + result.longitude + result.latitude);
  let new_json = JSON.stringify(result);
  console.log(new_json);
}

function Sleep(milliseconds) {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
}

async function continous_tracking() {
  for (let i = 0; i < 3; i++) {
    Geolocation.getCurrentPosition(parsing);
    await Sleep(3000);
  }
}

function oneTimeLocation() {
  Geolocation.getCurrentPosition(parsing);
}
const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#7a7a7a'}}>
      <View style={styles.ButtonContainer}>
        <IconButton
          icon={props => <Icon name="home" style={{fontSize: 40}} {...props} />}
          color="white"
          onPress={() => navigation.navigate('Home')}
        />
        <IconButton
          icon={props => (
            <Icon name="play-circle" style={{fontSize: 40}} {...props} />
          )}
          color="white"
          onPress={() =>
            Alert.alert('Das Tracking wurde erfolgreich gestartet')
          }
        />
      </View>
      <View style={styles.ButtonContainer2}>
        <IconButton
          icon={props => (
            <Icon name="stop-circle" style={{fontSize: 40}} {...props} />
          )}
          color="white"
          onPress={() => Alert.alert('Tracking beendet!')}
        />

        <IconButton
          icon={props => (
            <Icon name="calendar-day" style={{fontSize: 40}} {...props} />
          )}
          color="white"
          //onPress={() => oneTimeLocation()}
          onPress={() => navigation.navigate('SavedRoutes')}
        />
      </View>
      <MapHomeScreen />
      <BottomTab />
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <IconButton
          icon={props => <Icon name="plus" style={{fontSize: 48}} {...props} />}
          style={styles.iconPlus}
          onPress={() => navigation.navigate('AddStation')}
          color="black"
        />
      </View>
    </SafeAreaView>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  ButtonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    maxHeight: 60,
    position: 'absolute',
    marginLeft: 10,
    marginRight: 10,
    bottom: '1%',
    right: 20,
    left: 20,
    zIndex: 11,
    width: '30%',
  },
  ButtonContainer2: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    maxHeight: 60,
    position: 'absolute',
    bottom: '1%',
    right: 20,
    zIndex: 11,
    marginRight: 10,
    width: '30%',
  },
  mapStyle: {
    position: 'relative',
    width: '100%',
    height: '96%',
    zIndex: 0,
    marginRight: 0,
  },
  iconPlus: {
    bottom: 40,
    zIndex: 12,
    //backgroundColor: 'red',
  },
});
