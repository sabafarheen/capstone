import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import Card from "./components/Card/Card";
import ResourcePage from "./pages/ResourcePage";

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Switch>
            {/* <Route path="/" exact={true} component={} /> */}
            <Route path="/resource" component={ResourcePage} />
            {/* <Route path=" " component={ } /> */}
            {/* <Route path=" " component={ } /> */}
            {/* <Route path=" " component={ } /> */}
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
