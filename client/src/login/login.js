import React, { Component } from "react";

import { TextField, RaisedButton } from "material-ui";

import { login } from "../services/authServices";
import { saveToken } from "../services/storageServices";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleClick = async () => {
    const { username, password } = this.state;
    const token = await login(username, password);
    saveToken(token);
  };

  render() {
    return (
      <div>
        <TextField
          hintText="Username"
          floatingLabelText="Username"
          name="username"
          onChange={this.handleChange}
        />
        <TextField
          hintText="Password"
          floatingLabelText="Password"
          type="password"
          name="password"
          onChange={this.handleChange}
        />
        <RaisedButton label="Login" primary={true} onClick={this.handleClick} />
      </div>
    );
  }
}

export default Login;
