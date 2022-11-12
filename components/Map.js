import React, {Component} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

//{"lat":52.52000659999999,"lng":13.404954}
var ListofMarker = [{lat: 52.52000659999999, lng: 13.404954}];

export default class MapHomeScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      markers: [
        {
          title: 'hello',
          coordinates: {
            latitude: 51.825248,
            longitude: 8.75213,
          },
        },
        {
          title: 'hello',
          coordinates: {
            latitude: 51.625248,
            longitude: 8.75213,
          },
        },
      ],
    };
  }

  render() {
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
    height: '120%',
    zIndex: 0,
    marginRight: 0,
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
