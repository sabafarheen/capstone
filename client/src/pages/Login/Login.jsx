import React, { Component } from "react";
import "./Login.scss";

class Login extends Component {
  render() {
    return (
      <div className="login">
        <form
          className="login__form"
          onSubmit={this.submitHandler}
          method="post"
        >
          <div className="login__form__container">
            <label className="login__form__container-item" htmlFor="email">
              Email
            </label>
            <input
              type="text"
              placeholder="Enter Email"
              name="email"
              required
            />

            <label className="login__form__container-item" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="psw"
              required
            />
          </div>
          <button type="submit">Login</button>
          <label>
            <input type="checkbox" checked="checked" name="remember" /> Remember
            me
          </label>
        </form>
      </div>
    );
  }
}

export default Login;
