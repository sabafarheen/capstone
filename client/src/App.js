import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CardListItem from "./components/CardListItem/CardListItem";
import ResourcePage from "./pages/ReourcePage/ResourcePage";
import GradeForm from "./pages/GradeForm/GradeForm";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";

class App extends Component {
  state = {
    token: null,
  };
  componentDidMount() {
    const token = localStorage.getItem("token") || null;
    this.setState({
      token: token,
    });
  }
  componentDidUpdate() {
    console.log("Testing", this.state);
  }
  render() {
    return (
      <>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/" exact={true} component={Home} />
            <Route path="/login" exact component={Login} />
            <Route path="/grade" component={GradeForm} />
            <Route
              path="/resource/:subject/:grade"
              exact
              component={ResourcePage}
            />
            {/* <Route path=" " component={ } /> */}
          </Switch>
          <Footer />
        </BrowserRouter>
      </>
    );
  }
}

export default App;
