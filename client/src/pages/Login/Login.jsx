import axios from "axios";
import React, { Component } from "react";
import "./Login.scss";

class Login extends Component {
  state = {
    email: null,
    password: null,
    error: null,
  };
  emailHandler = (e) => {
    this.setState({
      email: e.target.value,
    });
  };
  passwordHandler = (e) => {
    this.setState({
      password: e.target.value,
    });
  };
  submitHandler = (e) => {
    e.preventDefault();
    console.log("Check", this.state);
    const payload = { email: this.state.email, password: this.state.password };
    axios
      .post("http://localhost:8080/users/login", payload)
      .then((result) => {
        console.log(result);
        if (result.status === 200) {
          localStorage.setItem("token", result.data.token);
          localStorage.setItem("name", result.data.name);
          localStorage.setItem("email", result.data.email);
          this.props.history.push("/grade");
        }
      })
      .catch((err) => {
        this.setState({
          error: err.response.data.error,
        });
      });
  };
  componentDidMount() {
    const token = localStorage.getItem("token") || null;
    if (token) {
      this.props.history.push("/grade");
    }
  }
  render() {
    return (
      <div className="login">
        <form className="login__form" onSubmit={this.submitHandler}>
          <div className="login__form__container">
            <label htmlFor="email">Email </label>
            <input
              type="text"
              className="login__form__container-item"
              placeholder="Enter Email"
              name="email"
              required
              onChange={this.emailHandler}
            />
          </div>
          <div className="login__form__container">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="login__form__container-item"
              placeholder="Enter Password"
              name="psw"
              required
              onChange={this.passwordHandler}
            />
          </div>
          <div className="login__form__container">
            <button className="login__form__container-button" type="submit">
              Login
            </button>
          </div>
          {this.state.error && this.state.error}
          <div className="login__form__container">
            <button className="login__form__container-button1" type="submit">
              Sign Up with Google
            </button>
          </div>
          <div className="login__form__container">
            <button className="login__form__container-button2" type="submit">
              Sign Up with Facebook
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
