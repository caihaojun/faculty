import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import ViewAttendance from "./components/ViewAttendance";
import SelectDate from "./components/SelectDate";

import About from "./components/pages/About";
import axios from "axios";

class App extends Component {
  state = {
    viewAttendance: [
      {
        id: 1,
        isPresent: true,
        section: "50001",
        student: "one",
        date: "2019-04-09"
      },
      {
        id: 2,
        isPresent: false,
        section: "50001",
        student: "two",
        date: "2019-04-09"
      },
      {
        id: 3,
        isPresent: false,
        section: "50001",
        student: "three",
        date: "2019-04-09"
      }
    ]
  };

  //
  // componentDidMount() {
  //   axios.get('')
  //     .then(res => this.setState({ viewAttendance: res.data }))
  // }

  //toggle present
  markPresent = id => {
    this.setState({
      viewAttendance: this.state.viewAttendance.map(attendance => {
        if (attendance.id === id) {
          attendance.isPresent = !attendance.isPresent;
        }
        return attendance;
      })
    });
  };

  //selectDate if connected
  // addTodo = (student) => {
  //     axios.post('', {
  //       student,
  //       isPresent: false
  //     })
  //catch error!!!!!!
  //       .then(res => this.setState({ viewAttendance: [...this.state.viewAttendance.filter
  //       (attendance=>attendance.date ! ==date)] }));
  //   }

  selectDate = date => {
    //  console.log(date);
    this.setState({
      viewAttendance: [
        ...this.state.viewAttendance.filter(
          attendance => attendance.date !== date
        )
      ]
    });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route
              exact
              path="/"
              render={props => (
                <React.Fragment>
                  <SelectDate selectDate={this.selectDate} />
                  <ViewAttendance
                    viewAttendance={this.state.viewAttendance}
                    markPresent={this.markPresent}
                  />
                </React.Fragment>
              )}
            />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
