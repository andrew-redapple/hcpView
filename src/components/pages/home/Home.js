import React, { Component } from "react";
import VideoCarousel from "../../carousel/VideoCarousel";
import SummaryNav from "../../nav/summaryNav/summaryNav";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faChevronCircleUp } from "@fortawesome/free-solid-svg-icons";
import "./Home.css";

export class Home extends Component {
  render() {
    console.log(this.props.videoCarouselOpen);
    console.log(this.props.videoCarouselClose);
    console.log(this.props.windowWidth);
    return (
      <div className="home">
        <div
          className="videoCarousel__home"
          style={{ display: this.props.videoCarouselOpen ? "flex" : "none" }}
        >
          <VideoCarousel
            videoCarouselClose={this.props.videoCarouselClose}
            width={this.props.windowWidth}
          />
        </div>
        <div className="summary">
          <SummaryNav />
          <div className="summary__title">Summary</div>
        </div>
      </div>
    );
  }
}

export default Home;
