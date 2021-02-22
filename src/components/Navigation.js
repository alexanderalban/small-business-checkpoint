import React, { useState, useEffect } from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'
import cookie from 'cookie'
import Login from './Login'

// Checks the cookie to see if the user has logged in
const checkAuth = () => {
    const cookies = cookie.parse(document.cookie)
    return cookies["loggedIn"] ? true : false
}

const Navigation = (props) => {

    //Global State Login Status
    console.log(`logged in? ${checkAuth()}`)

    //Local State Login Status for Navbar
    const [localLog, setLocalLog] = useState(false)

    console.log(`Local Login Status: ${localLog}`)

    useEffect(() => {
        if(!checkAuth()) {
            setLocalLog(false)
            
        } else if (checkAuth()) {
            setLocalLog(true)
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
        console.log("username is" + " " + props.currentUser)
        console.log("new users are " + props.user)
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
            <Toolbar className="login-bar" variant="md" style={{ background: '#D3D3D3', height: "20px", zIndex:"-1"}}>
                <Typography style={{ color: '#9F9F9F'}}>
                    Logged in as: {props.user[props.user.length - 1].username}
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

}

export default Navigation