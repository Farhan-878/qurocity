import React from "react";
import key1 from "../../assets/images/Picture1.png";
import key2 from "../../assets/images/Picture2.png";
import key3 from "../../assets/images/Picture3.png";

const Keybenefit = () => {
  return (
    <div className="keybenefit-content">
      <div className="container">
        <div className="keybenefit-content-wrapper">
          <h1 data-aos="fade-down">
            Key benefits of learning a new language with Qurocity
          </h1>
          <div className="keybenefit-box-wrapper">
            <div className="keybenefit-box" data-aos="zoom-in">
              <img src={key1} alt="key" />
              <p>
                There are no age restrictions or skill gaps to learning new
                languages. We help you take control of your life and unlock your
                growth potential.
              </p>
            </div>
            <div className="keybenefit-box" data-aos="zoom-in">
              <img src={key2} alt="key" />
              <p>
                Multilingual students are better equipped to ace academics and
                internationalize their careers. We help turn simple curiosities
                into life-changing realities.
              </p>
            </div>
            <div className="keybenefit-box" data-aos="zoom-in">
              <img src={key3} alt="key" />
              <p>
                There are no age restrictions or skill gaps to learning new
                languages. We help you take control of your life and unlock your
                growth potential.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Keybenefit;
