import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarModel from "./CarModel";

import car1 from "../img/car1.png";
import car2 from "../img/car2.png";
import car3 from "../img/car3.png";
import car4 from "../img/car4.png";

const carModels = {
  "Lamborghini Aventador":
    process.env.PUBLIC_URL + "/models/lamborghini_aventador.glb",
  "Lamborghini Urus":
    process.env.PUBLIC_URL + "/models/modified_lamborghini_urus.glb",
  "Lamborghini Huracan":
    process.env.PUBLIC_URL + "/models/huracan_falcontm.glb",
};

class CarShowcase extends React.Component {
  constructor(props) {
    super(props);
    this.sliderRef = React.createRef();
    this.state = {
      currentSlide: -1,
      showModel: false,
      currentModel: null,
    };
  }

  componentDidMount() {
    this.sliderRef.current.slickGoTo(0);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.currentSlide !== this.state.currentSlide) {
      const slides = document.querySelectorAll(".Car-slide");
      slides.forEach((slide, index) => {
        const textElement = slide.querySelector(".Car-background-text");
        const imageElement = slide.querySelector(".Car-image");
        if (textElement) {
          textElement.classList.remove("anima1", "anima2", "anima3");
        }
        if (imageElement) {
          imageElement.classList.remove("anima1Car", "anima2Car", "anima3Car");
        }
      });
      setTimeout(() => {
        const activeSlide = slides[this.state.currentSlide];
        const textElement = activeSlide.querySelector(".Car-background-text");
        const imageElement = activeSlide.querySelector(".Car-image");
        if (textElement) {
          const animaClass = `anima${(this.state.currentSlide % 3) + 1}`;
          textElement.classList.add(animaClass);
        }
        if (imageElement) {
          const animaClass = `anima${(this.state.currentSlide % 3) + 1}Car`;
          imageElement.classList.add(animaClass);
        }
      }, 50); // Delay to ensure the class is added after the slide change
    }
  }

  handleBeforeChange = (oldIndex, newIndex) => {
    this.setState({ currentSlide: newIndex });
  };

  handleClick = (carName) => {
    if (this.state.currentModel !== carModels[carName]) {
      this.setState({ showModel: true, currentModel: carModels[carName] });
      this.sliderRef.current.slickPause();
      const images = document.querySelectorAll(".Car-images");
      images.forEach((image) => {
        image.style.display = "none";
      });
    } else {
      this.setState({ showModel: false, currentModel: null });
    }
  };

  handleCloseModel = () => {
    this.setState({ showModel: false, currentModel: null });
    this.sliderRef.current.slickPlay();
    const images = document.querySelectorAll(".Car-image");
    images.forEach((image) => {
      image.style.display = "block";
    });
  };

  render() {
    const Car = [
      { name: "Lamborghini Aventador", image: car1 },
      { name: "Lamborghini Urus", image: car3 },
      { name: "Lamborghini Huracan", image: car4 },
    ];
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      arrows: false,
      beforeChange: this.handleBeforeChange,
    };
    return (
      <div className="Car-showcase">
        <Slider ref={this.sliderRef} {...settings}>
          {Car.map((car, index) => (
            <div
              key={index}
              className="Car-slide"
              onClick={() => this.handleClick(car.name)}
            >
              <div className="Car-background-text anima1">{car.name}</div>
              <div className="Car_img">
                <img
                  src={car.image}
                  alt={car.name}
                  className="Car-image anima1Car"
                />
              </div>
              <div className="Car-button">
                <button className="btn">Reset now</button>
                <button className="btn">Details</button>
              </div>
            </div>
          ))}
        </Slider>
        {this.state.showModel && (
          <CarModel
            modelPath={this.state.currentModel}
            onClose={this.handleCloseModel}
          />
        )}
      </div>
    );
  }
}

export { CarShowcase };
export default CarShowcase;
