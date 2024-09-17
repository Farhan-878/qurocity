import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import { FcReading } from "react-icons/fc";
import { GoQuote } from "react-icons/go";
import { IoMdClose } from "react-icons/io"; // Close icon
import "./style.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the sidenav
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="header-content">
      <div className="container">
        <div className="header-content-wrapper">
          <div
            className="header-logo"
            data-aos="zoom-in"
            data-aos-duration="2000"
          >
            <a href="/">
              <img src={logo} alt="logo" />
            </a>
          </div>

          {/* Hamburger or close button */}
          <div className="hamburger-menu" onClick={toggleMenu}>
            {isOpen ? (
              <IoMdClose size={30} /> // Close icon
            ) : (
              <GoQuote size={30} /> // Hamburger icon
            )}
          </div>

          {/* Sidenav */}
          <div className={`sidenav ${isOpen ? "open" : ""}`}>
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
