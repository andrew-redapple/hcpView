import React, { Component } from "react";
import { Table, Button } from "react-bootstrap";
import "./Appt.css";
export class Request extends Component {
  constructor(props) {
    super(props);
    this.state = {
      patients: [
        {
          id: 1,
          time: "8:00 AM",
          name: "Bob",
          age: 21,
          reason: "stomach pains",
          email: "bob@mail.com"
        },
        {
          id: 2,
          time: "9:00 AM",
          name: "Sally",
          age: 30,
          reason: "checkup",
          email: "sally@mail.com"
        },
        {
          id: 3,
          time: "9:30 AM",
          name: "Joe",
          age: 40,
          reason: "back pains",
          email: "joe@mail.com"
        },
        {
          id: 4,
          time: "10:00 AM",
          name: "Jane",
          age: 22,
          reason: "physical",
          email: "jane@mail.com"
        }
      ]
    };
  }

  renderTableHeader() {
    let header = Object.keys(this.state.patients[1]);
    return header.map((key, index) => {
      if (key != "id") {
        return <th key={index}>{key.toUpperCase()}</th>;
      }
    });
  }
  renderTableData() {
    return this.state.patients.map((patient, index) => {
      const { id, time, name, age, reason, email } = patient;
      return (
        <tr key={id}>
          <td>{time}</td>
          <td>{name}</td>
          <td>{age}</td>
          <td>{reason}</td>
          <td>{email}</td>
          <td>
            <Button variant="danger" size="sm">
              Reject
            </Button>
            <Button variant="success" size="sm">
              Accept
            </Button>
          </td>
        </tr>
      );
    });
  }
  render() {
    return (
      <div className="appt__table">
        {/* <h1>October 28, 2019</h1> */}
        <Table className="borderless" id="patients">
          <thead>{this.renderTableHeader()}</thead>
          <tbody>{this.renderTableData()}</tbody>
        </Table>
      </div>
    );
  }
}

export default Request;
