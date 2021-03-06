import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import { useParams } from 'react-router-dom'



//This is the map that is shown when the user is entering a new business
//it is, more or less, a default view of Austin
const AddMap = (props) => {

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
  

//this sets the center of the map to the center of Austin
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