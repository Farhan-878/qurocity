import React from "react";
import { FcGraduationCap } from "react-icons/fc";
import { FcBarChart } from "react-icons/fc";
import { FcPortraitMode } from "react-icons/fc";
import { FcGlobe } from "react-icons/fc";
import { FcIdea } from "react-icons/fc";
import { FcSportsMode } from "react-icons/fc";

const WonderingSection = () => {
  return (
    <div className="wonder-content">
      <div className="container">
        <div className="wonder-content-wrapper">
          <h1>
            Wondering how learning a foreign language is going to benefit you ?
          </h1>
          <div className="wonder-box-content">
            <div className="wonder-box">
              <FcGraduationCap fill="#fff" size={60} />
              <h4>Academic Excellence</h4>
              <p>
                Ace exams like SAT & GRE and outperform the rest in
                school/college interviews.
              </p>
            </div>
            <div className="wonder-box">
              <FcBarChart fill="#fff" size={60} />
              <h4>Dream Careers</h4>
              <p>
                Boost your resume to world-className standards and apply for
                international job positions.
              </p>
            </div>
            <div className="wonder-box">
              <FcPortraitMode stroke="#fff" size={60} />
              <h4>Real-Life Skills</h4>
              <p>
                Pick up valuable skills, such as multitasking, problem-solving,
                conflict management, etc.
              </p>
            </div>
            <div className="wonder-box">
              <FcIdea fill="#fff" size={60} />
              <h4>Cognitive Focus</h4>
              <p>
                Raise your level of cognitive intelligence and sharpen your
                overall thinking process.
              </p>
            </div>
            <div className="wonder-box">
              <FcSportsMode fill="#fff" size={60} />
              <h4>Self-Confidence Boost</h4>
              <p>
                Amplify your confidence levels to easily maximize strengths and
                manage weaknesses.
              </p>
            </div>
            <div className="wonder-box">
              <FcGlobe fill="#fff" size={60} />
              <h4>Cultural Empathy</h4>
              <p>
                Gain a deeper cultural perspective of diverse cultures and be
                more empathetic.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WonderingSection;
