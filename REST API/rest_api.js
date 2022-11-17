import React, {Component} from 'react';

const axios = require('axios');

export default class Rest_api extends Component {
  static myInstanceRest = null;

  static getInstance() {
    if (Rest_api.myInstanceRest == null) {
      Rest_api.myInstanceRest = new Rest_api();
    }
    return this.myInstanceRest;
  }

  postCurrentLocation(data) {
    axios
      .post('http://172.20.10.2:3000/CurrentLocation', data)
      .then(function(response) {
        //console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  getCurrentLocation(data) {
    axios
      .get('http://172.20.10.2:3000/CurrentLocation')
      .then(function(response) {
        //console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  getAllMarkers() {
    axios
      .get('http://172.20.10.2:3000/getAllMarkers')
      .then(function(response) {
        // handle success
        //console.log(response);
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      })
      .then(function() {
        // always executed
      });
  }

  postMarker(data) {
    axios
      .post('http://172.20.10.2:3000/postMarker', data)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}
