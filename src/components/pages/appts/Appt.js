import React, { Component } from "react";
import VideoCarousel from "../../carousel/VideoCarousel";
import { Table } from "react-bootstrap";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faChevronCircleUp } from "@fortawesome/free-solid-svg-icons";
import "./Appt.css";

export class Appt extends Component {
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

    //   // return (
    //   //   <tr id="appt__tableHeader">
    //   //     <th>Name</th>
    //   //     <th>Time</th>
    //   //     <th>Age</th>
    //   //     <th>Reason</th>
    //   //     <th>Email</th>
    //   //   </tr>
    //   // );
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
        </tr>
      );
    });
  }

  render() {
    console.log(this.props.videoCarouselOpen);
    console.log(this.props.videoCarouselClose);
    let today = new Date();
    return (
      <div>
        <div
          className="videoCarousel__appt"
          style={{ display: this.props.videoCarouselOpen ? "flex" : "none" }}
        >
          <VideoCarousel
            videoCarouselClose={this.props.videoCarouselClose}
            width={this.props.windowWidth}
          />
        </div>
        <div className="appt">
          <div className="appt__title"></div>
          <div className="appt__table">
            <h1>October 28, 2019</h1>
            <Table id="patients">
              <thead>{this.renderTableHeader()}</thead>
              <tbody>{this.renderTableData()}</tbody>
            </Table>
          </div>
        </div>
      </div>
    );
  }
}

export default Appt;
