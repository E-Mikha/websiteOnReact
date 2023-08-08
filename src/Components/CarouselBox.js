import { Component } from "react";
import { Carousel } from "react-bootstrap";
import pic1 from "../assets/pic1.jpg";
import pic2 from "../assets/pic2.jpg";
import pic3 from "../assets/pic3.jpg";

export default class CarouselBox extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100 carouselImg" src={pic1} alt="Authaya" />
          <Carousel.Caption>
            <h3 >Authaya - "Old city"</h3>
            <p >One day trip in Authaya</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100 carouselImg" src={pic2} alt="Bangkok" />
          <Carousel.Caption>
            <h3 >Bangkok - "King palace"</h3>
            <p>One day trip in Bangkok</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100 carouselImg" src={pic3} alt="Samed" />
          <Carousel.Caption>
            <h3 >Ko Samed - "White beach"</h3>
            <p>One day trip in Samed</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}
