import React, { Component, useState } from 'react'
import { Redirect } from 'react-router'
import {
  TextField,
  Button,
  Container
} from '@material-ui/core'

//This creates a local state for the login
class Login extends Component {
  state = {
      username: '',
      password: '',

  }

//This handles the changes made by the user so that they can see the change

handleUsernameChange = (e) => {
    const username = { ...this.username }
    username[e.target.name] = e.target.value
    this.setState(username)
}

handlePasswordChange = (e) => {
  const password = { ...this.password }
  password[e.target.name] = e.target.value
  this.setState(password)
}


//This is our onsubmit for this form, allowing the data to be gathered
 login = (e) => {
    e.preventDefault()
    document.cookie = "loggedIn=true;max-age=480*1000*"
    this.setState({username : this.state.username})
    this.setState({password : this.state.password})

    window.location.replace("/listings")
  }

//This is the form itself

  render() {
    return (
      <div>
        <Container maxWidth="lg" align="center">
          <form onSubmit={this.login}>
            <TextField
              required
              onChange={this.handleUsernameChange}
              value={this.state.username}
              name="username"
              label="Username"
              type="text" />
              <br></br>
            <TextField
              required
              onChange={this.handlePasswordChange}
              value={this.state.password}
              name="password"
              label="Password"
              type="password" />
              <br></br>
              <br></br>
            <Button
              type="submit"
              className="login-button"
              variant="contained"
              color="inherit"
              >Login</Button>
          </form>
        </Container>
      </div>
    );
  }
}

export default Login;