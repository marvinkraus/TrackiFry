import React from 'react';
import {SafeAreaView, StyleSheet, View, Alert} from 'react-native';
import {IconButton} from '@react-native-material/core';
import Icon from 'react-native-vector-icons/FontAwesome5';
import BottomTab from '../components/BottomTab';
import Geolocation from '@react-native-community/geolocation';
import MapHomeScreen from '../components/MapHomeScreen';
import Rest_api from '../REST API/rest_api';

let tracking = false;
let api = Rest_api.getInstance();

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
  api.postCurrentLocation(new_json);
  console.log('rest');
}

function Sleep(milliseconds) {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
}

async function continous_tracking() {
  tracking = true;
  while (tracking === true) {
    Geolocation.getCurrentPosition(parsing);
    await Sleep(600); //alle 5 Minuten wird der Standort versendet
  }
}

function StopTracking() {
  tracking = false;
}

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#253241'}}>
      <View style={styles.ButtonContainer}>
        <IconButton
          icon={props => <Icon name="home" style={{fontSize: 36}} {...props} />}
          color="white"
          //onPress={() => navigation.navigate('Home')}
          onPress={() =>
            Geolocation.getCurrentPosition(info => console.log(info))
          }
        />
        <IconButton
          icon={props => (
            <Icon name="play-circle" style={{fontSize: 36}} {...props} />
          )}
          color="white"
          onPress={() => {
            continous_tracking();
            Alert.alert(
              'Standortverfolgung',
              'Die Standortverfolung wurde erfolgreich gestartet',
              [{text: 'Bestätigen'}],
            );
          }}
        />
      </View>
      <View style={styles.ButtonContainer2}>
        <IconButton
          icon={props => (
            <Icon name="stop-circle" style={{fontSize: 36}} {...props} />
          )}
          color="white"
          onPress={() => {
            StopTracking();
            Alert.alert(
              'Standortverfolgung',
              'Die Standortverfolung wurde beendet!',
              [{text: 'Bestätigen'}],
            );
          }}
        />

        <IconButton
          icon={props => (
            <Icon name="calendar-day" style={{fontSize: 36}} {...props} />
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
    marginRight: 15,
    bottom: '1%',
    right: 20,
    left: 20,
    zIndex: 11,
    width: '30%',
    paddingRight: 5,
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
    paddingLeft: 5,
  },
  iconPlus: {
    bottom: '30%',
    zIndex: 12,
  },
});
