import React, {Component, useState} from 'react';

export default class Marker extends Component {
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
    const UUID = null;
    this.state = [
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
    // eslint-disable-next-line react-hooks/rules-of-hooks
    // const [lat, lang] = useState(this.markers);
    if (this.isStateempty()) {
      this.UUID = this.generateUUID();
    }
    console.log(this.UUID);

    const newMarker = {
      title: description,
      coordinates: {latitude: lat, longitude: long},
    };
    //console.log(this.state);
    //console.log('afterobj');
    //this.setState([this.state, newMarker]);
    //console.log(this.state);
    //console.log(newMarker);
    this.state.push(newMarker);
    //console.log('test');
  }
}
