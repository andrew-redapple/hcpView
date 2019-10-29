import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import img1 from "../../img/health1.jpg";
import img2 from "../../img/health2.jpg";
import img3 from "../../img/health3.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleUp } from "@fortawesome/free-solid-svg-icons";
import "./VideoCarousel.css";

export class VideoCarousel extends Component {
  _element = React.createRef();
  state = {
    carouselHeight: 0
  };
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     carouselHeight: 0
  //   };
  // }

  componentDidMount() {
    console.log(this._element.current.getBoundingClientRect().height);

    this.setState({
      carouselHeight: this._element.current.getBoundingClientRect().height
    });
  }

  render() {
    // console.log(this.state.carouselHeight);

    console.log();
    return (
      <div className="videoCarousel" ref={this._element}>
        <Carousel>
          <Carousel.Item>
            <img
              src={img1}
              alt="Slide 1"
              className="d-block w-100"
              height={"100%"}
              width={"50%"}
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={img2}
              alt="Slide 2"
              className="d-block w-100"
              height={"100%"}
              width={"50%"}
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={img3}
              alt="Slide 3"
              className="d-block w-100"
              height={"100%"}
              width={"50%"}
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <FontAwesomeIcon
          icon={faChevronCircleUp}
          style={{
            color: "red",
            height: "50px",
            width: "50px",
            marginTop: "400px",
            marginLeft: this.props.width - 200
          }}
          onClick={this.props.videoCarouselClose}
        />
      </div>
    );
  }
}

export default VideoCarousel;
