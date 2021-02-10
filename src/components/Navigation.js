import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { Link } from 'react-router-dom'
import cookie from 'cookie'



const Navigation = (props) => {
    console.log(props.loggedIn.isLoggedIn)
    if (props.loggedIn.isLoggedIn === false) 
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
    else return(
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
        </AppBar>
    )
}

export default Navigation