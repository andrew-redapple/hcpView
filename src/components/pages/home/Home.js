import React, { Component } from "react";
import VideoCarousel from "../../carousel/VideoCarousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleUp } from "@fortawesome/free-solid-svg-icons";
import "./Home.css";

export class Home extends Component {
  render() {
    console.log(this.props.videoCarouselOpen);
    console.log(this.props.videoCarouselClose);

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
            onClick={this.props.videoCarouselClose}
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
