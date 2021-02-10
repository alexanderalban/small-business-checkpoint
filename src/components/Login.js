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
    document.cookie = "loggedIn=true;max-age=60*1000*"



    window.location.replace("/listings")
  }



  render() {
    return (
      <div>
        <Container maxWidth="lg" align="center">
          <form>
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
              color="blue"
              onCLick={this.login}
              onSubmit={this.login}>Login</Button>
          </form>
        </Container>
      </div>
    );
  }
}


export default Login;