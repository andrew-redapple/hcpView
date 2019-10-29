import React, { Component } from "react";
import VideoCarousel from "../../carousel/VideoCarousel";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faChevronCircleUp } from "@fortawesome/free-solid-svg-icons";
import "./Analytics.css";

export class Analytics extends Component {
  render() {
    console.log(this.props.videoCarouselOpen);
    console.log(this.props.videoCarouselClose);

    return (
      <div>
        <div
          className="videoCarousel__analytics"
          style={{ display: this.props.videoCarouselOpen ? "flex" : "none" }}
        >
          <VideoCarousel
            videoCarouselClose={this.props.videoCarouselClose}
            width={this.props.windowWidth}
          />
        </div>
        <div className="analytics">
          <div className="analytics__title">Analytics</div>
        </div>
      </div>
    );
  }
}

export default Analytics;
