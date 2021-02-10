import React, { Component, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker.js'
import { useParams } from 'react-router-dom'

const AnyReactComponent = ({ text }) => <div>{text}</div>;
const ImageComponent = ({ img }) => <div>{img}</div>

const AddMap = (props) => {

    console.log(props.business)
    const { id } = useParams();
    const thisBusiness = props.business.find(business => business.id == id)
    const getMapOptions = (maps, props) => {
        return {
        disableDefaultUI: false,
        mapTypeControl: true,
        streetViewControl: true,
        styles: [{ featureType: 'poi', elementType: 'labels', stylers: [{ visibility: 'on' }] }],
      };
    };
  
      const [center, setCenter] = useState({lat: 30.267153, lng: -97.74306079999999 });
      const [zoom, setZoom] = useState(13);
      return (
          <div style={{ height: '30vh', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyDV9qVXL_Czy4GtRoz6phwRS5iKrQh8m1o' }}
            defaultCenter={center}
            defaultZoom={zoom}
            options={getMapOptions}
          >
          </GoogleMapReact>
        </div>
      );
  }
  
  export default AddMap;