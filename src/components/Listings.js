import React from 'react'
import {
    Container,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow
} from '@material-ui/core'
import { Link } from 'react-router-dom'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import cookie from 'cookie'

//This is the listing component, showing a list of the businesses from the API.
//It uses cookies to check to see if a user is logged in.
//if so, the user can add or remove listings

const checkAuth = () => {
    const cookies = cookie.parse(document.cookie)
    return cookies["loggedIn"] ? true : false
}

const Listings = (props) => {
    if (!checkAuth() || checkAuth === null) {
        return (
        <Container maxWidth="lg">
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Hours</TableCell>
                        <TableCell>Address</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.business.map((business, index) => (
                        <TableRow key={index}>
                            <TableCell>
                            <Link style={{ textDecoration: "underline", fontWeight: "bold"}} to={`/details/${business.id}`}>{business.name}</Link>
                                </TableCell>
                            <TableCell>{business.description}</TableCell>
                            <TableCell>{business.hours}</TableCell>
                            <TableCell>{business.address}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Container>
    )
                    }
    else if (checkAuth()) {
         return (
        <Container maxWidth="lg">
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Hours</TableCell>
                        <TableCell>Address</TableCell>
                        <TableCell>Delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.business.map((business, index) => (
                        <TableRow key={index}>
                            <TableCell>
                            <Link style={{ textDecoration: "underline", fontWeight: "bold"}} to={`/details/${business.id}`}>{business.name}</Link>
                                </TableCell>
                            <TableCell>{business.description}</TableCell>
                            <TableCell>{business.hours}</TableCell>
                            <TableCell>{business.address}</TableCell>
                            <TableCell><DeleteForeverIcon color="secondary" cursor='pointer' onClick={() => props.removeBusiness(index)}/></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Container>
    )
}
}

export default Listings