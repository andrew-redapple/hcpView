import React from "react";
import "./TopNav.css";
import HamburgerButton from "../sideNav/HamburgerButton";

export default function topNav(props) {
  return (
    <header className="topNav">
      <nav className="topNav__navigation">
        <div>
          <HamburgerButton click={props.hamburgerClickHandler} />
        </div>
        <div className="topNav__logo">
          <a href="/">RedApple</a>
        </div>
        <div className="spacing"></div>
        <div className="topNav__navigation-items">
          <ul>
            <li>
              <a href="#">Settings</a>
              <a href="#">Logout</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
