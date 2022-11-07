import React, {useState} from 'react';
import {View, StyleSheet, Text, SafeAreaView} from 'react-native';
import {TextInput, Button} from '@react-native-material/core';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

const AddStation = () => {
  return (
    <SafeAreaView>
      <GooglePlacesAutocomplete
        placeholder="Search"
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
        }}
        query={{
          key: 'AIzaSyAV-mA4D_PGmGmR0Bxs6DN9TdfUnM29XsY',
          language: 'en',
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  AutoCompletion: {
    width: '80%',
  },
});

export default AddStation;
