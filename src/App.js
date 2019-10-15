import React from "react";
import Tasks from "./components/tasks/Tasks";
import TopNav from "./components/nav/topNav/TopNav";
import SideNav from "./components/nav/sideNav/SideNav";
import BackDrop from "./components/backDrop/BackDrop";
import Login from "./components/login/Login";
import "./App.css";

class App extends React.Component {
  state = {
    sideNavOpen: false,
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
      // {
      //   id: 3,
      //   title: "Task4",
      //   subtitle: "Task4.1",
      //   isComplete: true
      // },
      // {
      //   id: 4,
      //   title: "Task5",
      //   subtitle: "Task5.1",
      //   isComplete: false
      // },
      // {
      //   id: 5,
      //   title: "Task6",
      //   subtitle: "Task6.1",
      //   isComplete: false
      // }
    ]
  };

  sideNavClickHandler = () => {
    this.setState(prevState => {
      return {
        sideNavOpen: !prevState.sideNavOpen
      };
    });
  };

  backDropClickHandler = () => {
    this.setState({ sideNavOpen: false });
  };
  render() {
    let backDrop;
    let tasks = this.state.tasks;

    if (this.state.sideNavOpen) {
      backDrop = <BackDrop click={this.backDropClickHandler} />;
    }

    return (
      <div className="App">
        <TopNav hamburgerClickHandler={this.sideNavClickHandler} />
        <SideNav show={this.state.sideNavOpen} tasks={this.state.tasks} />
        {backDrop}
        <div className="tasks">
          <Tasks tasks={this.state.tasks} />
        </div>
        <Login />
      </div>
    );
  }
}

export default App;
