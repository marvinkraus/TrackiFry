import React from 'react';
import { Alert, StyleSheet, Text, View } from "react-native";
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import BottomTab from '../components/BottomTab';
import { IconButton } from "@react-native-material/core";
import Icon from "react-native-vector-icons/FontAwesome5";
import Geolocation from "@react-native-community/geolocation";
import Markers from "../components/Marker";

const AddStation = ({navigation}) => {
  let markersTest = Markers.getInstance();
  let markerList = markersTest.getMarkers();
  return (
    <View style={styles.container}>
      <View style={styles.autocompleteStyle}>
        <Text
          style={{
            fontSize: 24,
            marginTop: 100,
            marginBottom: '3%',
            color: 'white',
            textAlign: 'center',
          }}>
          Bitte Adresse eingeben
        </Text>
        <GooglePlacesAutocomplete
          ref={instance => {
            this.GooglePlacesRef = instance;
          }}
          placeholder={'Suche'}
          onPress={(data: any, details: any = null) => {
            console.log('data', data);
            console.log('details', details);
            console.log(JSON.stringify(details?.geometry?.location));
            let geoData = JSON.stringify(details?.geometry?.location);
            let title = JSON.stringify(data?.structured_formatting.main_text);
            let lat = JSON.stringify(details?.geometry?.location.lat);
            let long = JSON.stringify(details?.geometry?.location.lng);
            console.log(title, lat, long);
            markersTest.addMarker(title, parseFloat(lat), parseFloat(long));
            this.GooglePlacesRef.setAddressText("")
            //console.log(markersTest.getMarkers());
            //console.log('success');
          }}
          query={{
            key: 'AIzaSyDTSx3i96XYjLF2qgnCoR5dh8GwU30N9cY',
            language: 'de', // language of the results
          }}
          fetchDetails={true}
          enablePoweredByContainer={false}
          styles={{
            container: {
              borderRadius: 16,
            },
            textInput: {
              height: 46,
              color: 'black',
              borderRadius: 16,
              borderWidth: 1,
              borderColor: 'black',
              fontSize: 18,
              paddingHorizontal: 15,
            },
          }}
        />
      </View>
      <View style={styles.ButtonContainer}>
        <IconButton
          icon={props => <Icon name="home" style={{fontSize: 36}} {...props} />}
          color="white"
          //onPress={() => navigation.navigate('Home')}
          onPress={() => navigation.navigate('Home')}
        />
        <IconButton
          icon={props => (
            <Icon name="play-circle" style={{fontSize: 36}} {...props} />
          )}
          color="white"
          onPress={() => {
            continous_tracking();
            Alert.alert('Standortverfolgung', 'Die Standortverfolung wurde erfolgreich gestartet', [
              {text: 'Bestätigen'},
            ]);
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
            Alert.alert('Standortverfolgung', 'Die Standortverfolung wurde beendet', [
              {text: 'Bestätigen'},
            ]);
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
      <BottomTab></BottomTab>
    </View>
  );
};
export default AddStation;

const styles = StyleSheet.create({
  autocompleteStyle: {
    flex: 7,
    padding: 40,
    backgroundColor: '#253241',
  },
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#253241',
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
    //backgroundColor: 'red',
  },
});
