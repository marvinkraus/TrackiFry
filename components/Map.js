import React, {Component} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import Markers from './Marker';
import {IconButton} from '@react-native-material/core';
import Icon from 'react-native-vector-icons/FontAwesome5';



export default class MapHomeScreen extends Component {
  constructor(props) {
    super(props);

    this.markersTest = Markers.getInstance();
  }

  rerender() {
    this.forceUpdate();
    console.log('updato');
  }
  render() {
    let markerList = this.markersTest.getMarkers();
    this.state = {
      markers: markerList,
    };
    return (
      <SafeAreaView style={{flex: 20, backgroundColor: '#16222d'}}>
        <MapView
          showsUserLocation={true}
          followUserLocation={true}
          zoomEnabled={true}
          style={styles.mapStyle}
          initialRegion={{
            latitude: 51.715248,
            longitude: 8.75213,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          customMapStyle={mapStyle}>
          {this.state.markers.map((marker, index) => (
            <Marker
              key={index}
              coordinate={marker.coordinates}
              title={marker.title}
              image={require('../images/foodtruck.png')} //IMAGE SIZE ÄNDERN
            />
          ))}
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
        <IconButton
          icon={props => <Icon name="sync" style={{fontSize: 26}} {...props} />}
          style={styles.iconRefresh}
          //onPress={() => navigation.navigate('AddStation')}
          color="white"
          onPress={() => this.rerender()}
        />
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  mapStyle: {
    position: 'relative',
    width: '100%',
    height: '105%',
    zIndex: 0,
    marginRight: 0,
  },
  iconRefresh: {
    marginBottom: 800,
    position: 'absolute',
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
