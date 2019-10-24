import React, { Component } from "react";
import VideoCarousel from "../../carousel/VideoCarousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleUp } from "@fortawesome/free-solid-svg-icons";
import "./Home.css";

export class Home extends Component {
  render() {
    // let videoCarouselClasses = "videoCarousel";

    // if (this.state.videoCarouselOpen) {
    //   videoCarouselClasses = "videoCarousel closed";
    // }
    return (
      <div>
        <div
          className="videoCarousel"
          style={{ display: this.props.videoCarouselOpen ? "flex" : "none" }}
        >
          <VideoCarousel />
          <FontAwesomeIcon
            icon={faChevronCircleUp}
            style={{ color: "red", height: "50px", width: "50px" }}
            onClick={(this.props.videoCarouselOpen = false)}
          />
        </div>
        <div className="summary">
          <div className="summary__title">Summary</div>
        </div>
      </div>
    );
  }
}

export default Home;
