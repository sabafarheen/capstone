import React, { Component } from "react";

class Signup extends Component {
  render() {
    return (
      <div className="signup">
        <form className="signup__form" onSubmit={this.submitHandler}>
          <div className="signup__form__container">
            {/* <label htmlFor="email">Email </label> */}
            <input
              type="text"
              className="signup__form__container-item"
              placeholder="Sign Up with Google"
              name="email"
              required
              onChange={this.emailHandler}
            />
          </div>
          <div className="signup__form__container">
            {/* <label htmlFor="password">Password</label> */}
            <input
              type="password"
              className="signup__form__container-item"
              placeholder="Sign Up with Facebook"
              name="psw"
              required
              onChange={this.passwordHandler}
            />
          </div>
          <div className="signup__form__container">
            {/* <label htmlFor="password">Password</label> */}
            <input
              type="password"
              className="signup__form__container-item"
              placeholder="Sign Up with Facebook"
              name="psw"
              required
              onChange={this.passwordHandler}
            />
          </div>
          {/* <button className="signup__form__button" type="submit">
            signup
          </button> */}
          {this.state.error && this.state.error}
        </form>
      </div>
    );
  }
}

export default Signup;
