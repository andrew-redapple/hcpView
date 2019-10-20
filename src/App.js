import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Tasks from "./components/pages/tasks/Tasks";
import TopNav from "./components/nav/topNav/TopNav";
import SideNav from "./components/nav/sideNav/SideNav";
import BackDrop from "./components/backDrop/BackDrop";
import Login from "./components/pages/login/Login";

// Pages
import Home from "./components/pages/home/Home";
import Appt from "./components/pages/appt/Appt";
import Analytics from "./components/pages/analytics/Analytics";
import "./App.css";

class App extends React.Component {
  state = {
    sideNavOpen: false,
    tasks: [
      {
        id: 1,
        title: "Home",
        subtitle: "Task1.1",
        isComplete: true
      },
      {
        id: 2,
        title: "Appt",
        subtitle: "Task2.1",
        isComplete: false
      },
      {
        id: 3,
        title: "Msg",
        subtitle: "Task3.1",
        isComplete: false
      },
      {
        id: 4,
        title: "Analytics",
        subtitle: "Task4.1",
        isComplete: true
      },
      {
        id: 5,
        title: "Task5",
        subtitle: "Task5.1",
        isComplete: false
      },
      {
        id: 6,
        title: "Task6",
        subtitle: "Task6.1",
        isComplete: false
      },
      {
        id: 7,
        title: "Task7",
        subtitle: "Task7.1",
        isComplete: true
      },
      {
        id: 8,
        title: "Task8",
        subtitle: "Task8.1",
        isComplete: false
      },
      {
        id: 9,
        title: "Task9",
        subtitle: "Task9.1",
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
    // let tasks = this.state.tasks;

    if (this.state.sideNavOpen) {
      backDrop = <BackDrop click={this.backDropClickHandler} />;
    }

    return (
      <div className="App">
        <TopNav hamburgerClickHandler={this.sideNavClickHandler} />
        <SideNav show={this.state.sideNavOpen} tasks={this.state.tasks} />
        {backDrop}
        {/* <div className="tasks">
          <Tasks tasks={this.state.tasks} />
        </div> */}
        {/* <Login /> */}
        <Router>
          <div className="pages">
            <Route path="/" exact component={Home} />
            <Route path="/appt" component={Appt} />
            <Route path="/analytics" component={Analytics} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
