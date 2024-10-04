import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import car1 from "../img/car1.png"
import car2 from "../img/car2.png"
import car3 from "../img/car3.png"
import car4 from "../img/car4.png"
class CarShowcase extends React.Component {

    render() {
        const Car = [
            { name: "Lamborghini Aventador", image: car1 },
            { name: "Lamborghini Diablo", image: car2 },
            { name: "Lamborghini Urus", image: car3 },
            { name: "Lamborghini Huracan", image: car4 }
        ];
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoPlay: true,
            autoPlaySpeed: 4000,
            arrows: false,
        };
        return (
            <div className="Car-showcase">
                <Slider {...settings}>
                    {Car.map((car, index) => (
                        <div key={index} className="Car-slide">
                            <div className="Car-background-text">
                                {car.name}
                            </div>
                            <img src={car.image} alt={car.name} className="Car-image" />
                            <div className="Car-button">
                                <button className="btn">Reset now</button>
                                <button className="btn">Details</button>
                            </div>
                        </div>

                    ))}
                </Slider>

            </div>
        )
    }
}
export { CarShowcase };
export default CarShowcase;