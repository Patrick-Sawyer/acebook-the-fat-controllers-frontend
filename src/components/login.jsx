import React, { Component } from "react";
import Navbar from "./navbar";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange = (event) => {
    this.state[event.target.name] = event.target.value;
  };

  handleSubmit = (event) => {
    console.log(this.state.email);
    //Insert API request here
    event.preventDefault();
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    fetch(`https://acebook-backend.herokuapp.com/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        localStorage.setItem("token", data.auth_token);
        console.log(data);
        //createMenu();
      });
    // evt.target.email = ""
    // this.state.email = ""
    // this.state.password = ""
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="our-form">
        <div className="form-group">
          <label>Email:</label>
          <input
            type="text"
            name="email"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </div>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Login;
