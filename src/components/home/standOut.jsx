import React from "react";
import stand from "../../assets/images/stand.png";

const StandOut = () => {
  return (
    <div className="standout-content">
      <div className="container">
        <div className="standout-content-wrapper">
          <h1>Why we stand out</h1>
          <div className="standout-box-wrapper">
            <div className="standout-box-left">
              <img src={stand} alt="stand" />
            </div>
            <div className="standout-box-right">
              <div className="standout-box">
                <h4>Learning from the best</h4>
                <p>
                  Learn from native language & Indian teachers passionate about
                  empowering youngsters to break global barriers.
                </p>
              </div>
              <div className="standout-box">
                <h4>Customize as per your goals</h4>
                <p>
                  Customize the course based on your personal and professional
                  goals to make the learning journey more focused.
                </p>
              </div>
              <div className="standout-box">
                <h4>Continuous improvement</h4>
                <p>
                  Take formative periodic tests & quizzes to continuously
                  improve with real-time analytics for in-depth reports about
                  your learning.
                </p>
              </div>
              <div className="standout-box">
                <h4>Everything’s user-friendly</h4>
                <p>
                  Attend live, interactive, and dynamic lectures with
                  device-friendly course material and modules for self-paced
                  learning.
                </p>
              </div>
              <div className="standout-box">
                <h4>Been there, done that</h4>
                <p>
                  Be a part of a learning ecosystem that is backed by two
                  decades of niche experience in the online education space.
                </p>
              </div>
              <div className="standout-box">
                <h4>Meaningful preparation</h4>
                <p>
                  Prepare for all globally-recognized language certifications –
                  our courses are aligned with the framework of your respective
                  country.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StandOut;
