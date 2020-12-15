import Profile from "./Profile";
import React, { Component } from "react";

export default class Login extends Component {
  state = {
    username: "",
    password: "",
    loginState: false,
    errorMessage: "",
  };

  submitForm = (e) => {
    e.preventDefault();
    let user = {
      username: "Jane",
      password: "12345",
    };

    if (
      user.username === this.state.username &&
      user.password === this.state.password
    ) {
      this.setState({
        loginState: true,
      });
      console.log("You have successfully signed in");
    } else {
      this.setState({
        errorMessage: "Please try again. The username or password is incorrect",
      });

      console.log("Please try again. The username or password is incorrect");
    }
  };

  render() {
    return (
      <div className="login">
        {this.state.loginState ? (
          <Profile username={this.state.username} />
        ) : (
          <>
            {" "}
            <form onSubmit={this.submitForm}>
              <label>
                Username:
                <input
                  type="text"
                  name="username"
                  onChange={(e) => this.setState({ username: e.target.value })}
                  onFocus={() => this.setState({ errorMessage: "" })}
                />
              </label>
              <br />
              <label>
                Password:
                <input
                  type="password"
                  name="password"
                  onChange={(e) => this.setState({ password: e.target.value })}
                  onFocus={() => this.setState({ errorMessage: "" })}
                />
              </label>
              <br />
              <input type="submit" value="Sign in" className="submit" />
            </form>{" "}
            <h3>{this.state.errorMessage}</h3>{" "}
          </>
        )}
      </div>
    );
  }
}
