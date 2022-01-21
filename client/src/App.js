import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CardListItem from "./components/CardListItem/CardListItem";
import ResourcePage from "./pages/ReourcePage/ResourcePage";
import GradeForm from "./pages/GradeForm/GradeForm";

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Switch>
            {/* <Route path="/" exact={true} component={} /> */}
            {/* <Route path="/" exact component={CardListItem} /> */}
            {/* <Route path="/grade" component={GradeForm} /> */}
            <Route path="/resource" exact component={ResourcePage} />
            {/* <Route path=" " component={ } /> */}
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
