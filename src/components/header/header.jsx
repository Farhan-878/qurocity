import React from "react";
import logo from "../../assets/images/logo.png";
import { FcReading } from "react-icons/fc";
import "./style.css";

const Header = () => {
  return (
    <div className="header-content">
      <div className="container">
        <div className="header-content-wrapper">
          <div className="header-logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="header-menu">
            <ul>
              <li>
                <a href="#">Languages</a>
              </li>
              <li>
                <a href="#">Blogs</a>
              </li>
              <li>
                <a href="#">Become a Tutor</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
            </ul>
            <div className="header-portal custom-btn">
              <FcReading />
              <span>Student Portal</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
