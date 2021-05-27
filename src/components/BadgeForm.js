import React from "react";

class BadgeForm extends React.Component {
  state = {};
  handleChange = (e) => {
    // console.log({
    //   name: e.target.name,
    //   value: e.target.value,
    // });
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleClick = (e) => {
    console.log("Button was clicked");
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form was submitted");
    console.log(this.state);
  };
  render() {
    return (
      <div>
        <h1>new attendanmt</h1>

        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>First name</label>
            <input
              onChange={this.handleChange}
              className="form-control"
              type="text"
              name="firstName"
              value={this.setState.firstName}
            ></input>
          </div>

          <div className="form-group">
            <label>Last name</label>
            <input
              onChange={this.handleChange}
              className="form-control"
              type="text"
              name="lastName"
              value={this.setState.lastName}
            ></input>
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              onChange={this.handleChange}
              className="form-control"
              type="text"
              name="email"
              value={this.setState.email}
            ></input>
          </div>

          <div className="form-group">
            <label>Job title</label>
            <input
              onChange={this.handleChange}
              className="form-control"
              type="text"
              name="jobTitle"
              value={this.setState.jobTitle}
            ></input>
          </div>

          <div>
            <button onClick={this.handleClick} className="btn btn-primary">
              Save
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default BadgeForm;
