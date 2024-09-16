import React from "react";
import dream from "../../assets/images/cropped-img.jpeg";

const GlobalDream = () => {
  return (
    <div className="global-dream-content">
      <div className="container">
        <div className="global-dream-content-wrapper">
          <h1>Fuel your global dreams by learning foreign languages</h1>
          <div className="global-dream-box">
            <div className="global-dream-left">
              <ul>
                <li>World-class virtual teaching platform</li>
                <li>Course flexibility and customization</li>
                <li>Free demo class for any language</li>
              </ul>
              <button className="custom-dark-btn">Register as a Teacher</button>
            </div>
            <div className="global-dream-right">
              <img src={dream} alt="dream" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalDream;
