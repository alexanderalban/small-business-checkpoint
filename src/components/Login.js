import React, { Component } from 'react'
import { Redirect } from 'react-router'
import {
  TextField,
  Button,
  Container
} from '@material-ui/core'
import Grid from '@material-ui/core/Grid';

class Login extends Component {
    state = {
      username: '',
      password: ''
    }


handleTextChange = (e) => {
    const state = { ...this.state }
    state[e.target.name] = e.target.value
    this.setState(state)
}


login = (e) => {
    e.preventDefault()
    // set cookie here
    // set loggedIn = true and max-age = 60*1000 (one minute)
    document.cookie = "loggedIn=true;max-age=60*1000*"

    window.location.replace("/")
  }

  render() {
    return (
      <div>
        <Container maxWidth="md" align="center">
          <form className="login-form" onSubmit={this.login}>
            <TextField
              required
              onChange={this.handleTextChange}
              value={this.state.username}
              name="username"
              label="Username"
              type="text" />
              <br></br>
            <TextField
              required
              onChange={this.handleTextChange}
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
              color="primary">Login</Button>
          </form>
        </Container>
      </div>
    );
  }
}


export default Login;