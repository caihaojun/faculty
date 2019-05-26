import React, { Component } from "react";
import PropTypes from "prop-types";

export class SelectDate extends Component {
  state = {
    date: ""
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.selectDate(this.state.date);
    this.setState({ date: "" });
  };

  onChange = e => this.setState({ date: e.target.value });

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: "flex" }}>
        <input
          type="text"
          name="date"
          style={{ flex: "10", padding: "5px" }}
          placeholder="Current Date ..."
          value={this.state.date}
          onChange={this.onChange}
        />
        <input
          type="submit"
          value="Submit"
          className="btn"
          style={{ flex: "1" }}
        />
      </form>
    );
  }
}

// PropTypes
SelectDate.propTypes = {
  selectDate: PropTypes.func.isRequired
};

export default SelectDate;
