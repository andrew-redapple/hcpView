import React from "react";

import "./BackDrop.css";

export default function BackDrop(props) {
  return <div className="backDrop" onClick={props.click}></div>;
}
