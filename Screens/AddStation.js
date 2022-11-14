import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {Button} from '@react-native-material/core';

const AddStation = () => {
  return (
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
      <Button
        style={{backgroundColor: '#ff9300', color: 'black'}}
        title="Halt bestätigen"
      />
    </View>
  );
};
export default AddStation;

const styles = StyleSheet.create({
  autocompleteStyle: {
    flex: 1,
    padding: 40,
    backgroundColor: '#000000',
  },
  AdresseEingeben: {
    alignItems: 'center',
    marginTop: 100,
    backgroundColor: '#424242',
  },
});
