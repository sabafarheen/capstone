import React, { Component } from "react";
import "./GradeForm.scss";

class GradeForm extends Component {
  state = {
    subject: null,
    grade: null,
  };

  //Receives the grade value what user chooses

  gradeHandler = (e) => {
    this.setState({
      grade: e.target.value,
    });
  };

  //Receives the subject value what user chooses

  subjectHandler = (e) => {
    this.setState({
      subject: e.target.value,
    });
  };

  submitHandler = (e) => {
    e.preventDefault();

    //If both grade and subject is not selected then button will not be clicked and stay in the same page

    if (!this.state.grade || !this.state.subject) return;

    //Once Submit button is clicked history.push function moves us from current page to destination page

    this.props.history.push(
      `/resource/${this.state.subject}/${this.state.grade}`
    );
  };

  // Check user's token and if token is not same then asks to login

  componentDidMount() {
    const token = localStorage.getItem("token") || null;
    if (!token) {
      this.props.history.push("/login");
    }
  }
  render() {
    return (
      <div className="grade">
        <form className="grade__form" onSubmit={this.submitHandler}>
          <label className="grade__form-drop" htmlFor="grade">
            Let's get to know you!{" "}
          </label>
          <select
            className="grade__form-dropdown"
            name="grade"
            id="grade"
            onChange={this.gradeHandler}
          >
            <option className="grade__form-dropdown" value="grade">
              What grade are you in?
            </option>
            <option className="grade__form-dropdown" value="KG">
              Grade K.G.
            </option>
            <option className="grade__form-dropdowndown" value="1">
              Grade 1{" "}
            </option>
            <option className="grade__form-dropdown" value="2">
              Grade 2{" "}
            </option>
            <option className="grade__form-dropdown" value="3">
              Grade 3{" "}
            </option>
            <option className="grade__form-dropdown-5" value="4">
              Grade 4{" "}
            </option>
            <option className="grade__form-dropdown-6" value="5">
              Grade 5{" "}
            </option>
            <option className="grade__form-dropdown-7" value="6">
              Grade 6{" "}
            </option>
            <option className="grade__form-dropdown-8" value="7">
              Grade 7{" "}
            </option>
          </select>

          <select
            className="grade__form-dropdown"
            name="subject"
            id="subject"
            onChange={this.subjectHandler}
          >
            <option className="grade__form-dropdown" value="subject">
              What do you want to learn?
            </option>
            <option className="grade__form-dropdown" value="english">
              English
            </option>
            <option className="grade__form-dropdowndown" value="mathematics">
              Mathematics
            </option>
            <option className="grade__form-dropdown" value="science">
              Science
            </option>
            <option className="grade__form-dropdown" value="weekly_packet">
              Weekly Packet
            </option>
          </select>
          <button className="grade__form-button" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default GradeForm;
