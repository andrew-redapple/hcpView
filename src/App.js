import React from "react";
import Tasks from "./components/Tasks";
import "./App.css";

class App extends React.Component {
  state = {
    tasks: [
      {
        id: 1,
        title: "Task1",
        subtitle: "Task1.1",
        isComplete: true
      },
      {
        id: 2,
        title: "Task2",
        subtitle: "Task2.1",
        isComplete: false
      },
      {
        id: 3,
        title: "Task3",
        subtitle: "Task3.1",
        isComplete: false
      }
    ]
  };
  render() {
    return (
      <div className="App">
        <div className="tasks">
          <Tasks tasks={this.state.tasks} />
        </div>
      </div>
    );
  }
}

export default App;
