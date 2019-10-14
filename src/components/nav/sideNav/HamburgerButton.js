import React from "react";
import "./HamburgerButton.css";

export default function HamburgerButton(props) {
  return (
    <button className="hamburgerButton" onClick={props.click}>
      <div className="hamburgerButton__line" />
      <div className="hamburgerButton__line" />
      <div className="hamburgerButton__line" />
    </button>
  );
}
