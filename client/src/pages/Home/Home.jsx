import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Home.scss";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Link to="/login">
          <button className="home__button" type="submit">
            {" "}
            Get Started →{" "}
          </button>
        </Link>
      </div>
    );
  }
}

export default Home;
