import React, { Component } from "react";

import "./TaskItems.css";

export class TaskItems extends Component {
  render() {
    return (
      <div className="taskItem">
        <div className="taskItem__title">{this.props.task.title}</div>
      </div>
    );
  }
}

export default TaskItems;
