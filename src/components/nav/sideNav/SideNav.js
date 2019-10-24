import React from "react";
import "./SideNav.css";
import "../../../App.css";
import "../../pages/tasks/TaskItems.css";
// import TaskItems from "../../pages/tasks/TaskItems";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faChartArea,
  faCalendarCheck,
  faCommentAlt,
  faCog,
  faSignOutAlt
} from "@fortawesome/free-solid-svg-icons";

import HamburgerButton from "../sideNav/HamburgerButton";

export default function SideNav(props) {
  let sideNavClasses = "sideNav";
  // let sideTasks;
  console.log(props.show);

  // if sideNavOpen is true, append open to sideNav class
  if (props.show) {
    sideNavClasses = "sideNav open";
  }
  return (
    <nav className={sideNavClasses}>
      <div className="sideTopNav">
        <HamburgerButton style={topNav} click={props.hamburgerClickHandler} />
      </div>
      <div className="sideNav__profileImg"></div>

      <ul>
        <Link to="/">
          <li>
            <FontAwesomeIcon icon={faHome} />
            Home
          </li>
        </Link>
        <Link to="/analytics">
          <li>
            <FontAwesomeIcon icon={faChartArea} />
            Analytics
          </li>
        </Link>
        <Link to="/appt">
          <li>
            <FontAwesomeIcon icon={faCalendarCheck} />
            Appointments
          </li>
        </Link>
        <Link to="/messages">
          <li>
            <FontAwesomeIcon icon={faCommentAlt} />
            Messages
          </li>
        </Link>
        <Link to="/settings">
          <li>
            <FontAwesomeIcon icon={faCog} />
            Settings
          </li>
        </Link>
        <Link to="/logout">
          <li>
            <FontAwesomeIcon icon={faSignOutAlt} />
            Logout
          </li>
        </Link>
      </ul>
    </nav>
  );
}

let topNav = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};
