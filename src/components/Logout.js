import React, { Component } from 'react'
import {Container, Button} from '@material-ui/core'
import cookie from 'cookie'



class Logout extends Component {

    logout = (e, props) => {
        e.preventDefault()
        document.cookie = "loggedIn=false;max-age=1"
        window.location.reload('/listings')
        window.location.replace("/logoutconfirm")
      }

render(){
    return(
        <Container maxwidth="md">
            <h1>Are you sure you wish to log out?</h1>
            <h2>You will not be able to add new businesses to our list until logged back in.</h2>
            <Button onClick={this.logout} 
                                size="large"
                                type="submit"
                                color="primary"
                                className="add-button"
                                variant="contained"
              color="inherit">Log out</Button>
        </Container>

    )
}
}

export default Logout;