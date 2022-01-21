import React, { Component } from "react";
import axios from "axios";
import CardList from "./../../components/CardList/CardList";
import "./ResourcePage.scss";

class ResourcePage extends Component {
  state = {
    resourceList: [],
    grade: 3,
    subject: "ENGLISH",
    showModal: false,
    selectedResource: null,
  };

  componentDidMount() {
    axios
      .get(
        `http://localhost:8080/resource/${this.state.subject}/${this.state.grade}`
      )
      .then((result) => {
        console.log("Subject", this.state.subject);
        console.log(result.data);
        this.setState({
          resourceList: result.data,
        });
      })
      .catch();

    // const onSubmit = (e) => {
    //   e.preventDefault();
    //   console.log("Target", e.target.value);
    //   this.state.grade = e.grade;

    //   axios
    //     .get(
    //       `http://localhost:8080/resource/${this.state.subject}/${this.state.grade}`
    //     )
    //     .then((result) => {
    //       console.log("Subject", this.state.subject);
    //       console.log(result.data);
    //       this.setState({
    //         resourceList: result.data,
    //       });
    //     })
    //     .catch();
    // };
  }

  //Making an axios request from the local host to load the selected resource with it's particular grade
  fetchResource = (id) => {
    axios
      .get(`http://localhost:8080/subject/grade/${id}`)
      .then((response) => {
        console.log("Fetch Resource: ", response.data);
        this.setState({
          selectedResource: response.data,
        });
      })
      .catch();
  };
  render() {
    return (
      <div>
        <CardList resourceList={this.state.resourceList} />
      </div>
    );
  }
}

export default ResourcePage;
