import React from 'react'
import { Container, TextField, Button } from '@material-ui/core'
import Grid from '@material-ui/core/grid'
import { useState, useEffect } from 'react'
import AddMap from '../containers/AddMap'

const Add = (props) => {

    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const [hours, setHours] = useState("")
    const [description, setDescription] = useState("")
    const [phone, setPhone] = useState("")
    const [lat, setLat] = useState("");
    const [lng, setLng] = useState("");

    const handleNameChange = (e) => {
        setName(e.target.value)
    }
    const handleAddressChange = (e) => {
        setAddress(e.target.value)
    }
    const handleHoursChange = (e) => {
        setHours(e.target.value)
    }
    const handleDescriptionChange = (e) => {
        setDescription(e.target.value)
    }
    const handlePhoneChange = (e) => {
        setPhone(e.target.value)
    }
    const handleLatitudeChange = (e) => {
        setLat(e.target.value)
    }
    const handleLongitudeChange = (e) => {
        setLng(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const idNumber = parseInt(props.business[props.business.length - 1].id);
        const newBusiness = {
            id: idNumber + 1,
            name,
            description,
            address,
            phone,
            hours,
            lat,
            lng,
        }
        props.addBusiness(newBusiness);
    }


        return (
            <Container align="center">
                <Grid style={{marginTop: "30px"}} container direction="row" align="center">
                        <form onSubmit={handleSubmit} className="add-form">
                            <TextField
                                required
                                id="name"
                                value={name}
                                onChange={handleNameChange}
                                name="name"
                                label="Name"
                                type="text"
                                />
                            <br></br>
                            <TextField
                                required
                                id="address"
                                value={address}
                                onChange={handleAddressChange}
                                name="address"
                                label="Address"
                                type="text"
                                />
                            <br></br>
                            <TextField 
                                required
                                id="hours"
                                value={hours}
                                onChange={handleHoursChange}
                                name="hours"
                                label="Hours (ex. 8AM - 9PM)"
                                type="text"
                                />
                            <br></br>
                            <TextField
                                required
                                id="description"
                                value={description}
                                onChange={handleDescriptionChange}
                                name="description"
                                label="Description"
                                type="text"
                                />
                            <br></br>
                            <TextField
                                required
                                id="phone"
                                value={phone}
                                onChange={handlePhoneChange}
                                name="phone"
                                label="Phone"
                                type="tel"
                                />
                                <br></br>
                            <TextField
                                required
                                id="latitude"
                                value={lat}
                                onChange={handleLatitudeChange}
                                name="latitude"
                                label="Latitude"
                                type="number"
                                />
                                <br></br>
                                <TextField
                                required
                                id="longitude"
                                value={lng}
                                onChange={handleLongitudeChange}
                                name="longitude"
                                label="Longitude"
                                type="number"
                                />
                                <br></br>
                                <br></br>
                            <Button size="large"
                                type="submit"
                                color="primary"
                                className="add-button"
                                variant="contained"
                                >
                                Save
                            </Button>
                        </form>
        
                        <Container maxWidth="sm" align="center">
                        <AddMap lat={30.267153} lng={-97.74306079999999}></AddMap>
                        </Container>
                </Grid>
            </Container>
        )
    }

export default Add;