import React from "react";
import rounded from "../../assets/images/circle.png";
import flag from "../../assets/images/flag.png";

const languages = [
  { name: "French", url: "/french" },
  { name: "German", url: "/german" },
  { name: "Russian", url: "/russian" },
  { name: "Spanish", url: "/spanish" },
  { name: "Dutch", url: "/dutch" },
  { name: "Portuguese", url: "/portuguese" },
  { name: "English", url: "/english" },
  { name: "Danish", url: "/danish" },
];

const asianLanguages = [
  { name: "Japanese", url: "/japanese" },
  { name: "Mandarin", url: "/mandarin" },
  { name: "Korean", url: "/korean" },
  { name: "Arabic", url: "/arabic" },
  { name: "Hindi", url: "/underDevelopment" },
  { name: "Sanskrit", url: "/underDevelopment" },
];

const ForeignLang = () => {
  return (
    <div className="foreignLang-content">
      <div className="container">
        <div className="foreignLang-content-wrapper">
          <div className="foreignLang-box-title">
            <div>
              <h1 data-aos="fade-down">11 foreign language</h1>
              <h1 data-aos="fade-down">
                learning courses for unlocking attractive opportunities.
              </h1>
            </div>
            <p data-aos="fade-down">
              However, like any life-changing skill, learning new languages is a
              journey that demands proper guidance and expertise. Qurocity can
              provide the ideal platform for learning languages the right way.
            </p>
          </div>
          <div className="foreignLang-box-content">
            <div className="foreignLang-box-left">
              <div className="foreignLang-box" data-aos="fade-right">
                <h3>European Languages</h3>
                <div className="language-list">
                  {languages.map((language, index) => (
                    <a href={language.url} key={index}>
                      <p>{language.name}</p>
                    </a>
                  ))}
                </div>
              </div>
              <div className="foreignLang-box" data-aos="fade-right">
                <h3>Asian Languages</h3>
                <div className="language-list">
                  {asianLanguages.map((language, index) => (
                    <a href={language.url} key={index}>
                      <p>{language.name}</p>
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="foreignLang-box-right" data-aos="fade-left">
              <div className="circle">
                <img src={rounded} alt="circle" />
                <div className="flag">
                  <img src={flag} alt="flag" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForeignLang;
