import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Tools
import TopNav from "./components/nav/topNav/TopNav";
import SideNav from "./components/nav/sideNav/SideNav";
import BackDrop from "./components/backDrop/BackDrop";
// import Login from "./components/pages/login/Login";

// Pages
import Home from "./components/pages/home/Home";
import Appt from "./components/pages/appts/Appt";
import Analytics from "./components/pages/analytics/Analytics";
import Message from "./components/pages/messages/Message";
import Settings from "./components/pages/settings/Settings";
import Logout from "./components/pages/logout/Logout";

import "./App.css";

class App extends React.Component {
  state = {
    sideNavOpen: false,
    videoCarouselOpen: false
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

  videoCarouselClickHandler = () => {
    this.setState(prevState => {
      return {
        videoCarouselOpen: !prevState.videoCarouselOpen
      };
    });
  };

  render() {
    let backDrop;
    let topNav = (
      <TopNav
        hamburgerClickHandler={this.sideNavClickHandler}
        questionMarkClickHandler={this.videoCarouselClickHandler}
      />
    );

    // let tasks = this.state.tasks;

    if (this.state.sideNavOpen) {
      backDrop = <BackDrop click={this.backDropClickHandler} />;
    }

    if (!this.state.videoCarouselOpen) {
      topNav = (
        <TopNav
          hamburgerClickHandler={this.sideNavClickHandler}
          questionMarkClickHandler={this.videoCarouselClickHandler}
        />
      );
    }

    return (
      <div className="App">
        {/* <div className="tasks">
          <Tasks tasks={this.state.tasks} />
        </div> */}
        {/* <Login /> */}
        <Router>
          {/* <TopNav
            hamburgerClickHandler={this.sideNavClickHandler}
            videoCarouselClickHandler={this.videoCarouselClickHandler}
          /> */}
          {topNav}
          <SideNav
            show={this.state.sideNavOpen}
            hamburgerClickHandler={this.sideNavClickHandler}
          />
          {backDrop}
          <Switch>
            <div className="pages">
              <Route
                path="/"
                exact
                // component={Home}
                render={props => (
                  <Home videoCarouselOpen={this.state.videoCarouselOpen} />
                )}
              />
              <Route path="/appt" component={Appt} />
              <Route path="/analytics" component={Analytics} />
              <Route path="/messages" component={Message} />
              <Route path="/settings" component={Settings} />
              <Route path="/logout" component={Logout} />
            </div>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
