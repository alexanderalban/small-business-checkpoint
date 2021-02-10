import React from 'react'
import { Container, TextField, Button } from '@material-ui/core'
import Grid from '@material-ui/core/grid'
import { useState, useEffect } from 'react'
import Map from '../containers/Map'
import AddMap from '../containers/AddMap'

const Add = (props) => {

    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const [hours, setHours] = useState("")
    const [description, setDescription] = useState("")

    const businessIds = []
    props.business.map(business => businessIds.push(business.id))
    const newId = (Math.max(...businessIds)) + 1

    const add = (e) => {
        e.preventDefault()
        
        const newBusiness = { 
            "id": newId,
            "name": name, 
            "address": address,
            "hours": hours,
            "description": description,
        }

        props.addBusiness(newBusiness)
        props.history.push("/");

    }


        return (
            <Container align="center">
                <Grid style={{marginTop: "30px"}} container direction="row" align="center">
                        <form onSubmit={add} className="add-form">
                            <TextField maxWidth="large"
                                onChange={e => setName(e.target.value)}
                                required 
                                name="name"
                                label="Name"
                                type="text"
                                />
                            <br></br>
                            <TextField
                                onChange={e => setAddress(e.target.value)}
                                required
                                name="address"
                                label="Address"
                                type="text"
                                />
                            <br></br>
                            <TextField 
                                onChange={e => setHours(e.target.value)}
                                required
                                name="hours"
                                label="Hours (ex. 8AM - 9PM)"
                                type="text"
                                />
                            <br></br>
                            <TextField
                                onChange={e => setDescription(e.target.value)}
                                required
                                name="description"
                                label="Description"
                                type="text"
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