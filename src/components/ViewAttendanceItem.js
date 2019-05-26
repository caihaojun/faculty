import React, { Component } from "react";
import PropTypes from "prop-types";

export class ViewAttendanceItem extends Component {
  getStyle = () => {
    return {
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: this.props.attendance.isPresent ? "line-through" : "none"
    };
  };

  markPresent = e => {
    console.log(this.props);
  };

  render() {
    const { id, student, section, date } = this.props.attendance;
    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            onChange={this.props.markPresent.bind(this, id)}
          />{" "}
          {student}
        </p>
      </div>
    );
  }
}

ViewAttendanceItem.propTypes = {
  attendance: PropTypes.object.isRequired,
  isPresent: PropTypes.func.isRequired
};

export default ViewAttendanceItem;
