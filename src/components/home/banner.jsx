import React from "react";
import bannerImg from "../../assets/images/bannerimg.png";
import "./style.css";

const BannerSection = () => {
  return (
    <div className="banner-content">
      <div className="container">
        <div className="banner-content-wrapper">
          <div className="banner-left">
            <div className="banner-box" data-aos="fade-right" data-id="1">
              <h1>
                Expand your world with personalized{" "}
                <span>language learning</span>
              </h1>
              <h4>Master any language, anytime, anywhere</h4>
              <p>
                Qurocity, the ultimate language learning app is here at your
                service to kick start your language learning journey with fun
                pocket size chapters, curated by the best language experts
                offering an unforgettable learning experience that comes in
                handy in all your career and multilingual aspects.
              </p>
              <button className="custom-dark-btn">Download the App now!</button>
            </div>
          </div>
          <div className="banner-right" data-aos="fade-left" data-id="2">
            <img src={bannerImg} alt="bannerImg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
