import React, { Component } from "react";
import "./Signup.scss";
import axios from "axios";

class Signup extends Component {
  state = {
    name: null,
    email: null,
    password: null,
    error: null,
    message: null,
  };
  nameHandler = (e) => {
    this.setState({
      name: e.target.value,
    });
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
    const payload = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
    };
    axios
      .post("http://localhost:8080/users/signup", payload)
      .then((result) => {
        console.log(result);
        if (result.status === 200) {
          this.setState({
            message: "Signup Successfully",
            name: null,
            email: null,
            password: null,
            error: null,
          });
          e.target.reset();
        }
      })
      .catch((err) => {
        this.setState({
          error: err.response.data.error,
          message: null,
        });
      });
  };
  render() {
    return (
      <div className="signup">
        <form className="signup__form" onSubmit={this.submitHandler}>
          <div className="signup__form__container">
            <label htmlFor="name"> Name </label>
            <input
              type="text"
              className="signup__form__container-item"
              placeholder="Enter Name "
              name="name"
              required
              onChange={this.nameHandler}
            />
          </div>
          <div className="signup__form__container">
            <label htmlFor="email">Email </label>
            <input
              type="email"
              className="signup__form__container-item"
              placeholder="Enter email "
              name="email"
              required
              onChange={this.emailHandler}
            />
          </div>
          <div className="signup__form__container">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="signup__form__container-item"
              placeholder="Enter Password"
              name="psw"
              required
              onChange={this.passwordHandler}
            />
          </div>

          <div className="signup__form__container">
            <button className="signup__form__container-button" type="submit">
              Sign Up
            </button>
          </div>
          <div>{this.state.message && this.state.message}</div>
          <div>{this.state.error && this.state.error}</div>
        </form>
      </div>
    );
  }
}

export default Signup;
