import React, { Component } from "react";
import TaskItems from "./TaskItems";
// import "./Tasks.css";

class Tasks extends Component {
  render() {
    return this.props.tasks.map(task => <TaskItems task={task} />);
  }
}

export default Tasks;
