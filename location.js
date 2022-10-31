import React, {Component} from 'react';
import {Alert, Text, View, TouchableOpacity} from 'react-native';

export default class locationFunction extends Component {
  state = {
    location: null,
  };

  findCoordinates = () => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const location = JSON.stringify(position);

        this.setState({location});
        Alert.alert('Right button pressed');
      },
      error => Alert.alert(error.message),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
    return (
      <View>
        <TouchableOpacity onPress={this.findCoordinates}>
          <Text>Location: {this.state.location}</Text>
        </TouchableOpacity>
      </View>
    );
  };
}
