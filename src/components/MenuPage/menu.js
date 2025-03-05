import React, { useState, useEffect } from "react";
import "./menuColor.css";

const ColorMenu = () => {
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");
  const [textColor, setTextColor] = useState("#000000");
  const [fontSize, setFontSize] = useState("16px");
  const [menuOpen, setMenuOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const [textColorMenu, setTextColorMenu] = useState("#ffffff");

  useEffect(() => {
    // Khôi phục các giá trị từ localStorage khi component được tải
    const storedBackgroundColor = localStorage.getItem("backgroundColor");
    const storedTextColor = localStorage.getItem("textColor");
    const storedFontSize = localStorage.getItem("fontSize");
    const storedTextColorMenu = localStorage.getItem("textColorMenu");

    if (storedBackgroundColor) {
      setBackgroundColor(storedBackgroundColor);
      document.documentElement.style.setProperty(
        "--background-color",
        storedBackgroundColor
      );
    }
    if (storedBackgroundColor) {
      setTextColorMenu(storedTextColorMenu);
      document.documentElement.style.setProperty(
        "--text-color-menu",
        storedTextColorMenu
      );
    }
    if (storedTextColor) {
      setTextColor(storedTextColor);
      document.documentElement.style.setProperty(
        "--text-color",
        storedTextColor
      );
    }
    if (storedFontSize) {
      setFontSize(storedFontSize);
      document.documentElement.style.setProperty(
        "--font-size",
        `${storedFontSize}px`
      );
    }
  }, []);

  const handleBackgroundColorChange = (e) => {
    const value = e.target.value;
    setBackgroundColor(value);
    document.documentElement.style.setProperty("--background-color", value);
    localStorage.setItem("backgroundColor", value);
  };

  const handleTextColorChange = (e) => {
    const value = e.target.value;
    setTextColor(value);
    document.documentElement.style.setProperty("--text-color", value);
    localStorage.setItem("textColor", value);
  };

  const handleTextColorMenuChange = (e) => {
    const value = e.target.value;
    setTextColorMenu(value);
    document.documentElement.style.setProperty("--text-color-menu", value);
    localStorage.setItem("textColorMenu", value);
  }

  const handleFontSizeChange = (e) => {
    const value = e.target.value;
    setFontSize(value);
    document.documentElement.style.setProperty("--font-size", `${value}px`);
    localStorage.setItem("fontSize", value);
  };

  const toggleMenu = () => {
    if (menuOpen) {
      setClosing(true);
      setTimeout(() => {
        setMenuOpen(false);
        setClosing(false);
      },300); // Thời gian trùng với thời gian của animation slideDown
    } else {
      setMenuOpen(true);
    }
  };

  return (
    <>
      <div className={`color-menu ${menuOpen ? 'open' : ''} ${closing ? 'close' : ''}`}>
      <button className="close-button-menu" onClick={toggleMenu}>X</button>
        <h3>Color Menu</h3>
        <div className="color-menu-item">
          <label>Background Color:</label>
          <input
            type="color"
            value={backgroundColor}
            onChange={handleBackgroundColorChange}
          />
        </div>
        <div className="color-menu-item">
          <label>Text Color Menu:</label>
          <input
            type="color"
            value={textColorMenu}
            onChange={handleTextColorMenuChange}
          />
        </div>
        <div className="color-menu-item">
          <label>Text Color:</label>
          <input
            type="color"
            value={textColor}
            onChange={handleTextColorChange}
          />
        </div>
        <div className="color-menu-item">
          <label>Font Size:</label>
          <input
            type="number"
            value={fontSize}
            onChange={handleFontSizeChange}
          />{" "}
        </div>
        <button className="close-button-menu" onClick={toggleMenu}>
          X
        </button>
      </div>
      <div className="menu-toggle" onClick={toggleMenu}>
        {menuOpen ? "X" : "☰"}
      </div>
    </>
  );
};

export default ColorMenu;
