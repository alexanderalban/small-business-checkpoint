import React from 'react';
import './Marker.css';



// This is the marker used to show the user the exact location of businesses

const Marker = (props) => {
    const { color, name } = props;
    return (
      <div className="marker"
        style={{ backgroundColor: color, cursor: 'pointer'}}
        title={name}
      />
    );
  };

  export default Marker;