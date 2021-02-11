import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import cookie from 'cookie'
import Listings from './containers/Listings'
import Login from './containers/Login'
import Details from './containers/Details'
import Add from './containers/Add'
import Logout from './containers/Logout'

const checkAuth = () => {
    const cookies = cookie.parse(document.cookie)
    return cookies["loggedIn"] ? true : false
}

const ProtectedRoute = ({component: Component, ...rest}) => {
    return (
        <Route 
        {...rest} 
        render={(props) => checkAuth()
            ? <Component {...props} />
            : <Redirect to="/login" />}
        />
    )
}

const Router = () => {
    return(
        <Switch>
            <Route exact path='/'component={Listings} />
            <Route path="/listings" component={Listings} />
            <Route path="/login" component={Login} />
            <ProtectedRoute path="/add" component={Add} />
            <ProtectedRoute path="/logout" component={Logout} />
            <Route exact path="/details/:id" component={Details} />
        </Switch>
    );
}

export default Router;