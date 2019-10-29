import React, { Component } from "react";
import { Tabs, Tab } from "react-bootstrap";

export class summaryNav extends Component {
  render() {
    return (
      <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
        <Tab eventKey="appts" title="Appts">
          <p>Appts</p>
        </Tab>
        <Tab eventKey="analytics" title="Analytics">
          <p>Analytics</p>
        </Tab>
        <Tab eventKey="messages" title="Messages">
          <p>Messages</p>
        </Tab>
      </Tabs>
    );
  }
}

export default summaryNav;
