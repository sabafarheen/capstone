import React, { Component } from "react";
import axios from "axios";
import CardList from "./../../components/CardList/CardList";
import "./ResourcePage.scss";

class ResourcePage extends Component {
  state = {
    resourceList: [],
    grade: null,
    subject: null,
    showModal: false,
    selectedResource: null,
  };

  componentDidMount() {
    axios
      .get(
        `http://localhost:8080/resource/${this.props.match.params.subject}/${this.props.match.params.grade}`
      )
      .then((result) => {
        console.log("Subject", this.state.subject);
        console.log(result.data);
        this.setState({
          resourceList: result.data,
        });
      })
      .catch();
  }

  render() {
    return (
      <div>
        <CardList resourceList={this.state.resourceList} />
      </div>
    );
  }
}

export default ResourcePage;
