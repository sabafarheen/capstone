import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ResourcePage from "./pages/ReourcePage/ResourcePage";
import GradeForm from "./pages/GradeForm/GradeForm";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";

class App extends Component {
  state = {
    token: null,
    isLogin: false,
  };
  constructor(props) {
    super(props);
    this.getIsLogin = this.getIsLogin.bind(this);
  }
  getIsLogin(event) {
    this.setState({ isLogin: event });
  }
  componentDidMount() {
    const token = localStorage.getItem("token") || null;
    this.setState({
      token: token,
    });
    if (token) {
      this.setState({ isLogin: true });
    }
  }

  render() {
    return (
      <>
        <BrowserRouter>
          <Header isLogin={this.state.isLogin} getIsLogin={this.getIsLogin} />
          <Switch>
            <Route path="/" exact={true} component={Home} />
            <Route
              path="/login"
              exact
              render={(props) => (
                <Login getIsLogin={this.getIsLogin} {...props} />
              )}
            />
            <Route path="/grade" component={GradeForm} />
            <Route
              path="/resource/:subject/:grade"
              exact
              component={ResourcePage}
            />
            <Route path="/signup" exact component={Signup} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </>
    );
  }
}

export default App;
