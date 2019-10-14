import React, { Component } from "react";
import TaskItems from "./TaskItems";
// import "./Tasks.css";

class Tasks extends Component {
  render() {
    return this.props.tasks.map(task => (
      // <div className="task">
      <TaskItems task={task} />
      // </div>
    ));
  }
}

export default Tasks;
