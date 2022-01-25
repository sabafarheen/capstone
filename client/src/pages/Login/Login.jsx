import axios from "axios";
import React, { Component } from "react";
import "./Login.scss";
import { GoogleLogin } from "react-google-login";
import { Link } from "react-router-dom";

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
  successResponseGoogle = (result) => {
    console.log(result);
    const payload = {
      email: result.profileObj.email,
      name: result.profileObj.name,
    };
    axios
      .post("http://localhost:8080/users/social-login", payload)
      .then((result) => {
        console.log(result);
        if (result.status === 200) {
          localStorage.setItem("token", result.data.token);
          localStorage.setItem("name", result.data.name);
          localStorage.setItem("email", result.data.email);
          this.props.getIsLogin(true);
          this.props.history.push("/grade");
        }
      })
      .catch((err) => {
        this.setState({
          error: err?.response?.data?.error,
        });
      });
  };

  failureResponseGoogle = (result) => {
    console.log(result);
  };
  submitHandler = (e) => {
    e.preventDefault();
    console.log("Check", this.state);
    const payload = { email: this.state.email, password: this.state.password };
    axios
      .post("http://localhost:8080/users/login", payload)
      .then((result) => {
        if (result.status === 200) {
          localStorage.setItem("token", result.data.token);
          localStorage.setItem("name", result.data.name);
          localStorage.setItem("email", result.data.email);
          this.props.getIsLogin(true);
          this.props.history.push("/grade");
        }
      })
      .catch((err) => {
        this.setState({
          error: err?.response?.data?.error,
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
            <GoogleLogin
              className="login__form__container-button1"
              clientId="804959678881-sh5r0bvammsuj6bouoa8hfaoga7nhp4f.apps.googleusercontent.com"
              buttonText="Signin with"
              onSuccess={this.successResponseGoogle}
              onFailure={this.failureResponseGoogle}
              cookiePolicy={"single_host_origin"}
            />
          </div>

          <div className="login__form__container">
            <Link to="/signup">
              <button className="login__form__container-button2" type="submit">
                Or Register to Login →
              </button>
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
