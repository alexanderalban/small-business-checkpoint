import React from 'react'
import {
    Container,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow
} from '@material-ui/core'
import Map from '../containers/Map'

const Details = (props) => {
    const thisBusiness = props.business.find(business => business.id == props.match.params.id)
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