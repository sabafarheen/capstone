import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CardListItem from "./components/CardListItem/CardListItem";
import ResourcePage from "./pages/ReourcePage/ResourcePage";
import GradeForm from "./pages/GradeForm/GradeForm";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/" exact={true} component={Home} />
            {/* <Route path="/" exact component={CardListItem} /> */}
            <Route path="/grade" component={GradeForm} />
            <Route path="/resource" exact component={ResourcePage} />
            {/* <Route path=" " component={ } /> */}
          </Switch>
          <Footer />
        </BrowserRouter>
      </>
    );
  }
}

export default App;
