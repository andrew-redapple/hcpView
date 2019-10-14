import React from "react";
import "./SideNav.css";
import "../../../App.css";
import "../../tasks/Tasks.css";
import TaskItems from "../../tasks/TaskItems";

export default function SideNav(props) {
  let sideNavClasses = "sideNav";
  let sideTasks;
  console.log(props.show);
  // if sideNavOpen is true, append open to sideNav class
  if (props.show) {
    sideNavClasses = "sideNav open";
  }
  return (
    <nav className={sideNavClasses}>
      <div className="sideNav__profileImg"></div>
      <div className="sideNav__tasks">
        {props.tasks.map(task => (
          <TaskItems task={task} />
        ))}
      </div>

      <div className="spacing"></div>
      <ul>
        <div className="separator" />
        <li>
          <a href="/">Settings</a>
        </li>
        <li>
          <a href="/">Logout</a>
        </li>
      </ul>
    </nav>
  );
}