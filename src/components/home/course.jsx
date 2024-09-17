import React from "react";
import mandarin from "../../assets/images/mandarin.png";
import japanese from "../../assets/images/japanese.png";
import korean from "../../assets/images/korean.png";
import french from "../../assets/images/french.png";
import german from "../../assets/images/german.png";
import english from "../../assets/images/english.png";

const languages = [
  { src: mandarin, alt: "mandarin" },
  { src: japanese, alt: "japanese" },
  { src: korean, alt: "korean" },
  { src: french, alt: "french" },
  { src: german, alt: "german" },
  { src: english, alt: "english" },
];

const Course = () => {
  return (
    <div className="course-content">
      <div className="container">
        <div className="course-content-wrapper">
          <h1 data-aos="fade-down">
            Master a new language for just <span>₹ 1499!</span>
          </h1>
          <div className="course-box">
            {languages.map((language, index) => (
              <div className="course-box-img" key={index} data-aos="zoom-in">
                <img
                  src={language.src}
                  alt={language.alt}
                  className={`rotate-${index}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
