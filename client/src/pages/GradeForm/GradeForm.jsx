import React, { Component } from "react";
import "./GradeForm.scss";

class GradeForm extends Component {
  submitHandler = (e) => {
    e.preventDefault();

    /* 
  Take the value of  e.target.grade.value
  Push the page change (History.push("/resource"))

  */
    console.log("Handler");
  };
  render() {
    return (
      <div className="grade">
        <form className="grade__form" onSubmit={this.submitHandler}>
          <label className="grade__form-drop" htmlFor="grade">
            Grade & Subject{" "}
          </label>
          <select className="grade__form-dropdown" name="grade" id="grade">
            <option className="grade__form-dropdown" value="grade">
              Choose a grade.........
            </option>
            <option className="grade__form-dropdown" value="grade K.G.">
              Grade K.G.
            </option>
            <option className="grade__form-dropdowndown" value="grade 1">
              Grade 1{" "}
            </option>
            <option className="grade__form-dropdown" value="grade 2">
              Grade 2{" "}
            </option>
            <option className="grade__form-dropdown" value="grade 3">
              Grade 3{" "}
            </option>
            <option className="grade__form-dropdown-5" value="grade 4">
              Grade 4{" "}
            </option>
            <option className="grade__form-dropdown-6" value="grade 5">
              Grade 5{" "}
            </option>
            <option className="grade__form-dropdown-7" value="grade 6">
              Grade 6{" "}
            </option>
            <option className="grade__form-dropdown-8" value="grade 7">
              Grade 7{" "}
            </option>
          </select>

          <select className="grade__form-dropdown" name="subject" id="subject">
            <option className="grade__form-dropdown" value="subject">
              Choose a subject.........
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
            <option className="grade__form-dropdown" value="weekly packet">
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
