import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CardListItem from "./components/CardListItem/CardListItem";
import ResourcePage from "./pages/ResourcePage";

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Switch>
            {/* <Route path="/" exact={true} component={} /> */}
            {/* <Route path="/" component={CardListItem} /> */}
            <Route path="/resource " component={ResourcePage} />
            {/* <Route path=" " component={ } /> */}
            {/* <Route path=" " component={ } /> */}
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
