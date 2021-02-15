import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker.js'
import { useParams } from 'react-router-dom'

const Map = (props) => {
    console.log(props.business)
    const { id } = useParams();
    const thisBusiness = props.business.find(business => business.id === id)
    const getMapOptions = (maps, props) => {
        return {
        disableDefaultUI: false,
        mapTypeControl: true,
        streetViewControl: true,
        styles: [{ featureType: 'poi', elementType: 'labels', stylers: [{ visibility: 'on' }] }],
      };
    };
  
      const [center, setCenter] = useState({lat: thisBusiness.lat, lng: thisBusiness.lng });
      const [zoom, setZoom] = useState(11);
      return (
          <div style={{ height: '30vh', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyDV9qVXL_Czy4GtRoz6phwRS5iKrQh8m1o' }}
            defaultCenter={center}
            defaultZoom={zoom}
            options={getMapOptions}
          >
            <Marker
              lat={thisBusiness.lat}
              lng={thisBusiness.lng}
              name="My Marker"
              color="red"
            />
          </GoogleMapReact>
        </div>
      );
  }
  
  export default Map;