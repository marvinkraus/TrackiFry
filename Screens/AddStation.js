import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {Button} from '@react-native-material/core';
//const GOOGLE_PLACES_API_KEY = 'AIzaSyDTSx3i96XYjLF2qgnCoR5dh8GwU30N9cY';

const AddStation = () => {
  return (
    <View style={styles.autocompleteStyle}>
      <Text
        style={{
          fontSize: 24,
          width: '80%',
          marginTop: 100,
          position: 'relative',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        Bitte Adresse eingeben
      </Text>
      <GooglePlacesAutocomplete
        GooglePlacesDetailsQuery={{fields: 'geometry'}}
        fetchDetails={true} // you need this to fetch the details object onPress
        placeholder="Search"
        query={{
          key: 'AIzaSyDTSx3i96XYjLF2qgnCoR5dh8GwU30N9cY',
          language: 'de', // language of the results
        }}
        onPress={(data: any, details: any = null) => {
          console.log('data', data);
          console.log('details', details);
          console.log(JSON.stringify(details?.geometry?.location));
          let geoData = JSON.stringify(details?.geometry?.location);
          console.log(geoData);
        }}
        onFail={error => console.error(error)}
      />
      <Button title="Halt bestätigen"></Button>
    </View>
  );
};
export default AddStation;

const styles = StyleSheet.create({
  autocompleteStyle: {
    flex: 1,
    padding: 40,
    backgroundColor: '#d5d5d5',
  },
  AdresseEingeben: {
    alignItems: 'center',
    marginTop: 100,
    backgroundColor: '#424242',
  },
});
