import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { Link } from 'react-router-dom'
import cookie from 'cookie'
import Router from '../Router'

const checkAuth = () => {
    const cookies = cookie.parse(document.cookie)
    return cookies["loggedIn"] ? true : false
}

const Navigation = (props) => {
    console.log("logged in?" + " " + checkAuth())
    if (!checkAuth() || checkAuth === null) {
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