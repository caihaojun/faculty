import React, { Component } from "react";
import ViewAttendanceItem from "./ViewAttendanceItem";
import PropTypes from "prop-types";

class ViewAttendance extends Component {
  render() {
    return this.props.viewAttendance.map(attendance => (
      <ViewAttendanceItem
        key={attendance.id}
        attendance={attendance}
        markPresent={this.props.markPresent}
      />
    ));
  }
}

//proptypes
ViewAttendance.propTypes = {
  viewAttendance: PropTypes.array.isRequired,
  isPresent: PropTypes.func.isRequired
};

export default ViewAttendance;
