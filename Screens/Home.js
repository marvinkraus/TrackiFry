import React from 'react';
import {SafeAreaView, StyleSheet, View, Alert, Text} from 'react-native';
import {IconButton} from '@react-native-material/core';
import Icon from 'react-native-vector-icons/FontAwesome5';
import BottomTab from '../BottomTab';
import MapView, {Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

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
    <SafeAreaView style={{flex: 1, backgroundColor: '#16222d'}}>
      <View>
        <MapView
          style={styles.mapStyle}
          initialRegion={{
            latitude: 51.715248,
            longitude: 8.75213,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          customMapStyle={mapStyle}>
          <Marker
            draggable
            coordinate={{
              latitude: 51.715248,
              longitude: 8.75213,
            }}
            // eslint-disable-next-line no-alert
            onDragEnd={e => alert(JSON.stringify(e.nativeEvent.coordinate))}
            title={'Test Marker'}
            description={'This is a description of the marker'}
          />
        </MapView>
      </View>
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

const mapStyle = [
  {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
  {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
  {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
  {
    featureType: 'administrative.locality',
    elementType: 'labels.text.fill',
    stylers: [{color: '#d59563'}],
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [{color: '#d59563'}],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [{color: '#263c3f'}],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [{color: '#6b9a76'}],
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [{color: '#38414e'}],
  },
  {
    featureType: 'road',
    elementType: 'geometry.stroke',
    stylers: [{color: '#212a37'}],
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [{color: '#9ca5b3'}],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [{color: '#746855'}],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [{color: '#1f2835'}],
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text.fill',
    stylers: [{color: '#f3d19c'}],
  },
  {
    featureType: 'transit',
    elementType: 'geometry',
    stylers: [{color: '#2f3948'}],
  },
  {
    featureType: 'transit.station',
    elementType: 'labels.text.fill',
    stylers: [{color: '#d59563'}],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [{color: '#17263c'}],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [{color: '#515c6d'}],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.stroke',
    stylers: [{color: '#17263c'}],
  },
];
