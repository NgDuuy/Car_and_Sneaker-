import React, { useState } from "react";
import "./Card.css"; // Đảm bảo bạn đã tạo file CSS và import nó
import CarModel from "../CarModelSideBar";

const Card = ({ imgSrc, title, sizes, colors, backgroundImage, carModelPath, onCloseModel }) => {
  const [selectedColor, setSelectedColor] = useState(null);

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const cardStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    // filter: 'blur(5px)',
  };

  return (
    <div className="container">
      <div className="card" style={cardStyle}>
        <div className="imgBx">
          <CarModel
            modelPath={carModelPath}
            onClose={onCloseModel}
            color={selectedColor}
          />
          {/* <img src={imgSrc} alt={title} className="image-card" /> */}
        </div>
        <div className="contentBx">
          <h2>{title}</h2>
          <div className="size">
            <h3>Size :</h3>
            {sizes.map((size, index) => (
              <span key={index}>{size}</span>
            ))}
          </div>
          <div className="color">
            <h3>Color :</h3>
            {colors.map((color, index) => (
              <span
                key={index}
                style={{ backgroundColor: color }}
                onClick={() => handleColorChange(color)}
              ></span>
            ))}
          </div>
          <a href="#">Visit</a>
        </div>
        <img src={backgroundImage} alt={title} className="image-cards" />
      </div>
    </div>
  );
};

export default Card;