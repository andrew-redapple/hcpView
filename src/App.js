import React from "react";
import Tasks from "./components/tasks/Tasks";
import TopNav from "./components/nav/topNav/TopNav";
import SideNav from "./components/nav/sideNav/SideNav";
import BackDrop from "./components/backDrop/BackDrop";
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
    // let sideNav;

    if (this.state.sideNavOpen) {
      backDrop = <BackDrop click={this.backDropClickHandler} />;
      // sideNav = <SideNav />;
    }
    return (
      <div className="App">
        <TopNav hamburgerClickHandler={this.sideNavClickHandler} />
        <SideNav show={this.state.sideNavOpen} />
        {backDrop}
        <div className="tasks">
          <Tasks tasks={this.state.tasks} />
        </div>
      </div>
    );
  }
}

export default App;
