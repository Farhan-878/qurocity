import React from "react";
import FeatureBox from "./featureBox";
import "./style.css";

const FeatureSection = () => {
  return (
    <div className="feature-content">
      <div className="container">
        <div className="feature-content-wrapper">
          <h1>Featured in Top Columns</h1>
          <FeatureBox />
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
