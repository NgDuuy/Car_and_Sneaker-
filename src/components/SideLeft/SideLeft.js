import React, { useState } from "react";
import CarShowlogo from "../../img/logo.png";
import "./SideLeft.css"; // Đảm bảo bạn đã tạo file CSS và import nó
import Card from "../CardProduct/Card";

const carModels = {
  "Lamborghini Aventador":
    process.env.PUBLIC_URL + "/models/lamborghini_aventador.glb",
  "Lamborghini Urus":
    process.env.PUBLIC_URL + "/models/modified_lamborghini_urus.glb",
  "Lamborghini Huracan":
    process.env.PUBLIC_URL + "/models/huracan_falcontm.glb",
  "bmw x6m": 
    process.env.PUBLIC_URL + "/models/2016_bmw_x6m.glb",
  "ferrari widebody":
    process.env.PUBLIC_URL + "/models/ferrari_296_widebody.glb",
};

const SideLeft = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentModel, setCurrentModel] = useState(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleCloseModel = () => {
    setCurrentModel(null);
  };

  return (
    <div className="sideleft">
      <input
        type="checkbox"
        id="burger-toggle"
        checked={menuOpen}
        onChange={toggleMenu}
      />
      <div className={`overplay_sidebar ${menuOpen ? "open" : ""}`}></div>
      <label htmlFor="burger-toggle" className="burger-menu">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </label>
      <div className={`menu ${menuOpen ? "open" : ""}`}>
        <div className="menu-inner">
          <ul className="menu-nav">
            <li className="menu-nav-item">
              <a className="menu-nav-link" href="#">
                <span>
                  <div>Home</div>
                </span>
              </a>
            </li>
            <li className="menu-nav-item">
              <a className="menu-nav-link" href="#">
                <span>
                  <div>About</div>
                </span>
              </a>
            </li>
            <li className="menu-nav-item">
              <a className="menu-nav-link" href="#">
                <span>
                  <div>Service</div>
                </span>
              </a>
            </li>
            <li className="menu-nav-item">
              <a className="menu-nav-link" href="#">
                <span>
                  <div>Team</div>
                </span>
              </a>
            </li>
          </ul>
          <div className="gallery">
            <div className="title">
              <p>Sora Gallery</p>
            </div>
            <div className="images">
              <Card
                backgroundImage="https://cdn-i.vtcnews.vn/resize/th/upload/2024/04/05/du-an-moi-52-19144994.png"
                imgSrc="http://pngimg.com/uploads/running_shoes/running_shoes_PNG5782.png"
                title="LamboGhini"
                sizes={["7", "8", "9", "10"]}
                colors={["#ff0000", "#00ff00", "#0000ff"]}
                carModelPath={carModels["Lamborghini Aventador"]}
                onCloseModel={handleCloseModel}
              />
              <Card
                backgroundImage="https://static-images.vnncdn.net/files/publish/2023/10/24/can-canh-sieu-xe-ferrari-sp-8-doc-nhat-the-gioi-ve-tay-mot-dai-gia-chau-a-1397.jpg?width=0&s=jpzKcbEBjtRjR_6ZxgntLA"
                imgSrc="http://pngimg.com/uploads/running_shoes/running_shoes_PNG5782.png"
                title="Ferrari"
                sizes={["7", "8", "9", "10"]}
                colors={["#ff0000", "#00ff00", "#0000ff"]}
                carModelPath={carModels["ferrari widebody"]}
                onCloseModel={handleCloseModel}
              />
              <Card
                backgroundImage="https://choxe365.com/wp-content/uploads/2022/01/gia-Mercedes-Maybach-2022.jpeg"
                imgSrc="http://pngimg.com/uploads/running_shoes/running_shoes_PNG5782.png"
                title="Mercedes"
                sizes={["7", "8", "9", "10"]}
                colors={["#ff0000", "#00ff00", "#0000ff"]}
                carModelPath={carModels["Lamborghini Huracan"]}
                onCloseModel={handleCloseModel}
              />
              <Card
                backgroundImage="https://katavina.com/uploaded/tin/BMW-i8/BMW-i8-mau-xe-doc-ton-trong-phan-khuc-cua-minh.jpg"
                imgSrc="http://pngimg.com/uploads/running_shoes/running_shoes_PNG5782.png"
                title="BMW"
                sizes={["7", "8", "9", "10"]}
                colors={["#ff0000", "#00ff00", "#0000ff"]}
                carModelPath={carModels["bmw x6m"]}
                onCloseModel={handleCloseModel}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideLeft;
