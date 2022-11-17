import React from 'react';
import { Alert, KeyboardAvoidingView, Platform, SafeAreaView, StyleSheet, Text, View } from "react-native";
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import BottomTab from '../components/BottomTab';
import { IconButton } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Markers from '../components/Marker';
import Geolocation from '@react-native-community/geolocation';

const AddStation = ({navigation}) => {
  let markersTest = Markers.getInstance();
  let markerList = markersTest.getMarkers();
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#253241'}}>
      <View style={styles.autocompleteStyle}>
        <Text
          style={{
            fontSize: 24,
            marginTop: '30%',
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
            this.GooglePlacesRef.setAddressText('');
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
          onPress={() => navigation.navigate('Home')}
        />
      </View>
      <View style={styles.ButtonContainer2}>
        <IconButton
          icon={props => (
            <Icon name="calendar-day" style={{fontSize: 36}} {...props} />
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
export default AddStation;

const styles = StyleSheet.create({
  autocompleteStyle: {
    padding: 40,
    backgroundColor: '#253241',
    flex: 17,
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
    bottom: '1%',
    zIndex: 11,
    width: '15%',
    left: '15%',
    //backgroundColor: 'red',
  },
  ButtonContainer2: {
    //backgroundColor: 'red',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    maxHeight: 60,
    position: 'absolute',
    bottom: '1%',
    zIndex: 11,
    width: '12%',
    right: '15%',
  },
  iconPlus: {
    zIndex: 12,
    bottom: '30%',
  },
});
