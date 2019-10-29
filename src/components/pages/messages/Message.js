import React, { Component } from "react";
import VideoCarousel from "../../carousel/VideoCarousel";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faChevronCircleUp } from "@fortawesome/free-solid-svg-icons";
import "./Message.css";

export class Message extends Component {
  render() {
    console.log(this.props.videoCarouselOpen);
    console.log(this.props.videoCarouselClose);

    return (
      <div>
        <div
          className="videoCarousel__message"
          style={{ display: this.props.videoCarouselOpen ? "flex" : "none" }}
        >
          <VideoCarousel
            videoCarouselClose={this.props.videoCarouselClose}
            width={this.props.windowWidth}
          />
        </div>
        <div className="message">
          <div className="message__title">Message</div>
        </div>
      </div>
    );
  }
}

export default Message;
