import React from "react";
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import iso from "../../assets/images/iso.png";
import logo from "../../assets/images/logo.png";
import "./style.css";

const Footer = () => {
  return (
    <footer className="footer-content-wrapper">
      <div className="container">
        <div className="footer-content">
          <div className="footer-left" data-aos="fade-right">
            <h6>An online language learning platform</h6>
            <div className="footer-iso">
              <img src={iso} alt="iso" />
            </div>
            <div className="footer-social">
              <a href="#">
                <FaLinkedinIn />
              </a>
              <a href="#">
                <FaFacebookF />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
              <a href="#">
                <FaYoutube />
              </a>
            </div>
          </div>
          <div className="footer-right" data-aos="fade-left">
            <div className="footer-box">
              <h6>Quick Links</h6>
              <ul>
                <a href="#">
                  <li>Blogs</li>
                </a>
                <a href="#">
                  <li>About us</li>
                </a>
                <a href="#">
                  <li>Meet Our Tutor</li>
                </a>
                <a href="#">
                  <li>Life at Qurocity</li>
                </a>
                <a href="#">
                  <li>Career with Us</li>
                </a>
              </ul>
            </div>
            <div className="footer-box">
              <h6>Get Qurocity on</h6>
              <ul>
                <a href="#">
                  <li>Andriod</li>
                </a>
                <a href="#">
                  <li>Spotify Podcasts</li>
                </a>
                <a href="#">
                  <li>Apple</li>
                </a>
              </ul>
            </div>
            <div className="footer-box">
              <h6>Legal</h6>
              <ul>
                <a href="#">
                  <li>Privacy Policy</li>
                </a>
                <a href="#">
                  <li>Refund Policy & NDNC</li>
                </a>
                <a href="#">
                  <li>Terms And Conditions</li>
                </a>
              </ul>
            </div>
            <div className="footer-box">
              <h6>Contact Us</h6>
              <ul>
                <a href="#">
                  <li className="footer-email">
                    <FaEnvelope />
                    Email us
                  </li>
                </a>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom" data-aos="fade-up">
          <div className="footer-logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="footer-copyright">
            <p>© 2022 Iteck. All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
