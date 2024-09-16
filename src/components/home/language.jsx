import React from "react";
import online from "../../assets/images/online.png";

const LanguageSection = () => {
  return (
    <div className="language-content">
      <div className="container">
        <div className="language-content-wrapper">
          <h1>Why Our Online Language Learning Triumphs</h1>
          <div className="language-box-wrapper">
            <div className="language-box-left">
              <ul>
                <li>
                  Personalized curriculums for that focused or targeted learning
                  or choose from our full length courses as well.
                </li>
                <li>
                  Flexible learning and assessments by tutors with native
                  proficiency and teaching experience
                </li>
                <li>
                  No learning delays or disruptions with latest tools for LMS
                  and passive learning.
                </li>
              </ul>
            </div>
            <div className="language-box-right">
              <img src={online} alt="online" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanguageSection;
