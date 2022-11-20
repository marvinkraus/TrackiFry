import React, {Component} from 'react';
import Rest_api from '../REST API/rest_api';

export default class Marker extends Component {
  markerRestApi = Rest_api.getInstance();

  static myInstance = null;
  static getInstance() {
    if (Marker.myInstance == null) {
      Marker.myInstance = new Marker();
    }
    return this.myInstance;
  }

  constructor(props) {
    super(props);
    //this.addMarker = this.addMarker.bind(this);

    this.state = [
      // zur Verdeutlichung wie das Array aufgebaut ist
      /*{
        /* title: 'hello',
        coordinates: {
          latitude: 51.825248,
          longitude: 8.75213,
        },
      },
      {
        title: 'hello2',
        coordinates: {
          latitude: 51.625248,
          longitude: 8.75213,
        },
      },*/
    ];
  }

  getMarkers() {
    return this.state;
  }

  isStateempty() {
    if (this.state == null || this.state.length == 0) {
      return true;
    } else {
      return false;
    }
  }

  onAddItem = () => {
    this.setState(state => {
      const list = state.list.concat(state.value);

      return {
        list,
        value: '',
      };
    });
  };

  generateUUID() {
    return Date.now();
  }

  addMarker(description, lat, long) {
    // const [lat, lang] = useState(this.markers);
    if (this.isStateempty()) {
      this.UUID = this.generateUUID();
    }
    console.log(this.UUID);
    this.JsonBuilderMarker(description, lat, long, this.UUID);
    const newMarker = {
      title: description,
      coordinates: {latitude: lat, longitude: long},
    };

    this.state.push(newMarker);
  }
  isApiempty() {
    if ((this.markerRestApi == null) || (this.markerRestApi === undefined)) {
      console.log('is empty');
    } else {
      console.log('is not empty');
    }
  }

  JsonBuilderMarker(description, lat, long, UUID) {
    let result = {};
    result.description = description;
    result.latitude = lat;
    result.longitude = long;
    result.UUID = UUID;

    let resultjson = JSON.stringify(result);
    //this.isApiempty();
    this.markerRestApi.postMarker(resultjson);
  }
}
