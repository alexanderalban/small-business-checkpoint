import React from 'react'
import {
    Container
} from '@material-ui/core'
import Map from '../containers/Map'

//This component lists the details for a particular restaurant when the name is 
//clicked on the list
const Details = (props) => {
    const id = props.match.params.id
    const thisBusiness = props.business.find(business => business.id == id)
    // console.log(props.business)    
    return(
            <Container maxWidth="sm">
                <h1>{thisBusiness.name}</h1>
                <h3>{thisBusiness.address}</h3>
                <h3>{thisBusiness.hours}</h3>
                <p>{thisBusiness.description}</p>
                <Map lat={thisBusiness.lat} lng={thisBusiness.lng}></Map>
            </Container>
        )
    }
export default Details