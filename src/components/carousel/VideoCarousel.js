import React from "react";
import { Carousel } from "react-bootstrap";
import img1 from "./img/health1.jpg";
import img2 from "./img/health2.jpg";
import img3 from "./img/health3.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleUp } from "@fortawesome/free-solid-svg-icons";
import "./VideoCarousel.css";

export default function VideoCarousel(props) {
  return (
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
        <FontAwesomeIcon icon={faChevronCircleUp} style={{ color: "red" }} />
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
        <FontAwesomeIcon icon={faChevronCircleUp} style={{ color: "red" }} />
      </Carousel.Item>
    </Carousel>
  );
}
