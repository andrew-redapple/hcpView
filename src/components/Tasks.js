import React, { Component } from "react";
import TaskItems from "./TaskItems";

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
