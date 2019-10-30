import React, { Component } from "react";
import { Tabs, Tab } from "react-bootstrap";
import Request from "../../pages/appts/Request";
export class apptNav extends Component {
  render() {
    return (
      <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
        <Tab eventKey="past" title="Past">
          <p>Past</p>
        </Tab>
        <Tab eventKey="today" title="Today">
          <p>Today</p>
        </Tab>
        <Tab eventKey="requests" title="Requests">
          <Request />
        </Tab>
      </Tabs>
    );
  }
}

export default apptNav;
