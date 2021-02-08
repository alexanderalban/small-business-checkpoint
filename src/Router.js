import React from 'react'
import { Switch, Route } from 'react-router'
import Listings from './containers/Listings'
import Login from './containers/Login'
import Details from './containers/Details'
import Map from './containers/Map'

const Router = () => {
    return(
        <Switch>
            <Route exact path='/'component={Listings} />
            <Route path="/listings" component={Listings} />
            <Route path="/login" component={Login} />
            <Route exact path="/details/:id" component={Details} />
        </Switch>
    );
}

export default Router;