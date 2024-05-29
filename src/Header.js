import React from "react";
import "./Header.css";
import { FaArrowLeftLong } from "react-icons/fa6";
import logo from "./images/Logo.png";

const Header = ({ curStep, totStep, onBackButtonClick }) => {
  return (
    <div className="header">
      <FaArrowLeftLong onClick={onBackButtonClick} className="back-icon" />
      <img src={logo} alt="logo dopamina dolares" className="logo-img" />
      <span>
        {curStep} / {totStep}
      </span>
    </div>
  );
};

export default Header;
