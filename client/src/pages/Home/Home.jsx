import React, { Component } from "react";
import "./Home.scss";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <button className="home__button" type="submit">
          {" "}
          Get Started →{" "}
        </button>
      </div>
    );
  }
}

export default Home;
