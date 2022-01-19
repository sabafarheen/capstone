import React, { Component } from "react";
import axios from "axios";

class ResourcePage extends Component {
  state = {
    resourceList: [],
    selectedResource: null,
  };

  componentDidMount() {
    axios
      .get("http://localhost:8080/resource")
      .then((result) => {
        this.setState({
          resourceList: result.data,
        });
        console.log(result.data);
      })
      .catch();
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
    return <div></div>;
  }
}

export default ResourcePage;
