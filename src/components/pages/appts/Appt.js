import React, { Component } from "react";
import VideoCarousel from "../../carousel/VideoCarousel";
import ApptNav from "../../nav/apptNav/apptNav";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faChevronCircleUp } from "@fortawesome/free-solid-svg-icons";
import "./Appt.css";

export class Appt extends Component {
  render() {
    console.log(this.props.videoCarouselOpen);
    console.log(this.props.videoCarouselClose);
    let today = new Date();
    return (
      <div>
        <div
          className="videoCarousel__appt"
          style={{ display: this.props.videoCarouselOpen ? "flex" : "none" }}
        >
          <VideoCarousel
            videoCarouselClose={this.props.videoCarouselClose}
            width={this.props.windowWidth}
          />
        </div>
        <div className="appt">
          <ApptNav />
          <div className="appt__title"></div>
          {/* <div className="appt__table">
            <h1>October 28, 2019</h1>
            <Table id="patients">
              <thead>{this.renderTableHeader()}</thead>
              <tbody>{this.renderTableData()}</tbody>
            </Table>
          </div> */}
          <div className="appt__calendar"></div>
        </div>
      </div>
    );
  }
}

export default Appt;
