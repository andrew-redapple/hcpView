import React from "react";
import "./TopNav.css";
import HamburgerButton from "../sideNav/HamburgerButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuestionCircle,
  faSignOutAlt,
  faCog
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function topNav(props) {
  console.log(props.questionMarkClickHandler);
  console.log(props.videoCarouselOpen);

  let iconStyle;
 
  if (props.videoCarouselOpen) {
    iconStyle = {
      display: "none"
    };
  }
  return (
    <header className="topNav">
      <nav className="topNav__navigation">
        <div>
          <HamburgerButton click={props.hamburgerClickHandler} />
        </div>
        <div className="topNav__logo">
          <Link to="/">RedApple</Link>
        </div>
        <div className="spacing"></div>
        <div className="topNav__navigation-items">
          <ul>
            <Link to="#">
              <li>
                <FontAwesomeIcon
                  icon={faQuestionCircle}
                  onClick={props.questionMarkClickHandler}
                  style={iconStyle}
                />
              </li>
            </Link>
            <Link to="/settings">
              <li>
                <FontAwesomeIcon icon={faCog} />
              </li>
            </Link>
            <Link to="/logout">
              <li>
                <FontAwesomeIcon icon={faSignOutAlt} />
              </li>
            </Link>
          </ul>
        </div>
      </nav>
    </header>
  );
}
