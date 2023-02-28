import React, { useContext, useState } from "react";
import "./Header.css";
import ThemeContext from "../../context/ThemeContext";

const Header = ({ darkMode, setDarkMode }) => {

  const color = useContext(ThemeContext);

  const handleClick = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="Header">
      <h1 style={{ color }}>React Hooks</h1>
      <div className="header_buttons">
        <button type="button" onClick={handleClick}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </div>
  );
};

export { Header };
