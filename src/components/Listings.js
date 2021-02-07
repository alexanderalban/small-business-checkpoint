import React from 'react'
import {
    Container,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow
} from '@material-ui/core'

const Listings = (props) => {
    return (
        <Container maxWidth="lg">
            <h1>This is the Listings Screen</h1>
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
                    {props.business.map((business, idx) => (
                        <TableRow key={idx}>
                            <TableCell>{business.name}</TableCell>
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

export default Listings