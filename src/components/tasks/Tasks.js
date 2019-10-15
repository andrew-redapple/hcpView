import React, { Component } from "react";
import TaskItems from "./TaskItems";
// import "./Tasks.css";

class Tasks extends Component {
  render() {
    console.log(window.innerWidth);

    if (window.innerWidth < 400 && this.props.tasks.length > 3) {
      console.log(this.props.tasks.length);
      // let beginningDiv = document.createElement("div");
    }
    return this.props.tasks.map(task => (
      <TaskItems key={task.id} task={task} />
    ));
  }
}

export default Tasks;
