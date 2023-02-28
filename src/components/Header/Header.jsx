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
          {darkMode ? "Go to Light Mode" : "Go to Dark Mode"}
        </button>
        <button type="button" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "Go to Light Mode 2" : "Go to Dark Mode 2"}
        </button>
      </div>
    </div>
  );
};

export { Header };
