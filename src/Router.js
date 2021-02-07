import React from 'react'
import { Switch, Route } from 'react-router'
import Listings from './containers/Listings'
import Login from './containers/Login'

const Router = () => {
    return(
        <Switch>
            <Route exact path='/'component={Listings} />
            <Route path="/listings" component={Listings} />
            <Route path="/login" component={Login} />
        </Switch>
    );
}

export default Router;