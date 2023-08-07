import { Component } from "react";
import { Carousel } from "react-bootstrap";
import pic1 from "../assets/pic1.jpg";
import pic2 from "../assets/pic2.jpg";

export default class CarouselBox extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={pic1} alt="Project1" />
          <Carousel.Caption>
            <h3 style={{ color: "red" }}>Project image</h3>
            <p style={{ color: "green" }}>sadsfgfdfhghffvfdvdvfdsdcx</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={pic2} alt="Project2" />
          <Carousel.Caption>
            <h3 style={{ color: "red" }}>New project image</h3>
            <p style={{ color: "green" }}>sadsfgfdfhghffvfdvdvfdsdcx</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}
