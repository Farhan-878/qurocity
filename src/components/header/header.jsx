import React, { useState, useEffect } from "react";
import logo from "../../assets/images/logo.png";
import { FcReading } from "react-icons/fc";
import { GoQuote } from "react-icons/go";
import { IoMdClose } from "react-icons/io"; // Close icon
import "./style.css";
import Headroom from "react-headroom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 991);

  // Function to handle window resizing
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 991);
    };

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    // Cleanup listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Toggle the sidenav
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const headerContent = (
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
              <li data-aos="zoom-in">
                <a href="#">Languages</a>
              </li>
              <li data-aos="zoom-in">
                <a href="#">Blogs</a>
              </li>
              <li data-aos="zoom-in">
                <a href="#">Become a Tutor</a>
              </li>
              <li data-aos="zoom-in">
                <a href="#">About us</a>
              </li>
              <li data-aos="zoom-in">
                <a href="#">Contact us</a>
              </li>
            </ul>
            <div className="header-portal custom-btn" data-aos="zoom-in">
              <FcReading />
              <span>Student Portal</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Conditionally render Headroom for desktop, normal header for mobile
  return isDesktop ? <Headroom>{headerContent}</Headroom> : headerContent;
};

export default Header;
