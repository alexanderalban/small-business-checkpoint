import React, { useState, useEffect } from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { Link, useHistory } from 'react-router-dom'
import cookie from 'cookie'
import Router from '../Router'

const checkAuth = () => {
    const cookies = cookie.parse(document.cookie)

    return cookies["loggedIn"] ? true : false
}



const Navigation = (props) => {

    //Global State Login Status
    console.log("logged in?" + " " + checkAuth())

    //Local State Login Status for Navbar
    const [localLog, setLocal] = useState(false)
    console.log(`Local Login Status: ${localLog}`)

    useEffect(() => {
        if(!checkAuth()) {
            setLocal(false)
        } else if (checkAuth()) {
            setLocal(true)
        }
    })

    if (localLog === false) {
    return (
        <AppBar position="relative" style={{ backgroundColor: "rgb(60,179,113)" }}>
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: "1" }}>
                    Gluten Free Austin Finder
                </Typography>
                <ul className="nav-list">
                    <li className="nav-list-item">
                        <Link to="/listings">Listings</Link>
                    </li>
                    <li className="nav-list-item">
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            </Toolbar>
        </AppBar>
    )
    }
    else if (checkAuth()) {
        console.log("username is" + " " + props.user.username)
        return(
            
         <AppBar position="relative" style={{ backgroundColor: "rgb(60,179,113)" }}>
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: "1" }}>
                    Gluten Free Austin Finder
                </Typography>
                <ul className="nav-list">
                    <li className="nav-list-item">
                        <Link to="/listings">Listings</Link>
                    </li>
                    <li className='nav-list-item'>
                        <Link to='/add'>Add</Link>
                    </li>
                    <li className='nav-list-item'>
                        <Link to="/logout">Logout</Link>
                    </li>
                </ul>
            </Toolbar>
            <Toolbar>
                <Typography>
                    Logged in as: {props.user.username}
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

}

export default Navigation