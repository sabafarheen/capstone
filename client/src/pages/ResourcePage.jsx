import React, { Component } from "react";
import axios from "axios";
// import Card from "../components/CardListItem/CardListItem";

class ResourcePage extends Component {
  state = {
    resourceList: [],
    grade: 3,
    subject: "ENGLISH",
    showModal: false,
    selectedResource: null,
  };

  // showModal = (subject, grade) => {
  //   this.setState({
  //     showModal: true,
  //     subject,
  //     grade,
  //   });
  // };
  // hideModal = () => {
  //   this.setState({ showModal: false });
  // };
  componentDidMount() {
    // axios
    //   .get(
    //     `http://localhost:8080/resource/${this.state.subject}/${this.state.grade}`
    //   )
    //   .then((result) => {
    //     console.log("Subject", this.state.subject);
    //     console.log(result.data);
    //     this.setState({
    //       resourceList: result.data,
    //     });
    //   })
    //   .catch();
  }
  submitHandler = (e) => {
    e.preventDefault();
    console.log("Target", e.target.value);

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
  };

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
        <form onSubmit={this.submitHandler}>
          <label for="grade">Choose a Grade: </label>
          <select name="grade" id="grade">
            <option value="grade K.G.">Grade K.G.</option>
            <option value="grade 1">Grade 1 </option>
            <option value="grade 2">Grade 2 </option>
            <option value="grade 3">Grade 3 </option>
            <option value="grade 4">Grade 4 </option>
            <option value="grade 5">Grade 5 </option>
            <option value="grade 6">Grade 6 </option>
            <option value="grade 7">Grade 7 </option>
          </select>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default ResourcePage;
