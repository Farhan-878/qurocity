import React, { useEffect, useState } from "react";
import bannerImg from "../../assets/images/bannerimg.png";
import { FcOvertime } from "react-icons/fc";
import { FcManager } from "react-icons/fc";
import { FcReadingEbook } from "react-icons/fc";
import { FcExpand } from "react-icons/fc";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
import "./style.css";

const BannerSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const banners = [
    {
      title: "Expand your world with personalized language learning",
      subtitle: "Master any language, anytime, anywhere",
      content: `Qurocity, the ultimate language learning app is here at your
        service to kick start your language learning journey with fun
        pocket size chapters, curated by the best language experts
        offering an unforgettable learning experience that comes in
        handy in all your career and multilingual aspects.`,
      buttonText: "Download the App now!",
    },
    {
      title: "Why We Stand Out from Competitors:",
      contentList: [
        {
          icon: <FcOvertime size={60} />,
          title: "Flexibility and Convenience:",
          content: `Learn anytime, anywhere, fitting seamlessly into busy
            schedules, unlike fixed offline classes.`,
        },
        {
          icon: <FcManager size={60} />,
          title: "Expert Tutors and Cutting-Edge Technology:",
          content: `Highly qualified tutors and innovative tools keep students
            engaged and motivated, ensuring superior learning.`,
        },
        {
          icon: <FcReadingEbook size={60} />,
          title: "Culturally Rich Content:",
          content: `Lessons include cultural context, preparing learners for
            real-world communication and interactions.`,
        },
      ],
    },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 10000);

    return () => clearInterval(intervalId);
  }, [banners.length]);

  const handleArrowClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
  };
  return (
    <div className="banner-content">
      <div className="container">
        <div className="banner-content-wrapper">
          <div className="banner-left">
            <div
              className="banner-box"
              style={{ display: currentIndex === 0 ? "flex" : "none" }}
            >
              <h1>
                {banners[0].title} <span>language learning</span>
              </h1>
              <h4>{banners[0].subtitle}</h4>
              <p>{banners[0].content}</p>
              <button className="custom-dark-btn">
                {banners[0].buttonText}
              </button>
            </div>

            <div
              className="banner-box"
              style={{ display: currentIndex === 1 ? "flex" : "none" }}
            >
              <h1>{banners[1].title}</h1>
              {banners[1].contentList.map((item, index) => (
                <div className="banner-box-list" key={index}>
                  <div className="banner-box-item-left">{item.icon}</div>
                  <div className="banner-box-item-right">
                    <h4>{item.title}</h4>
                    <p>{item.content}</p>
                  </div>
                </div>
              ))}
            </div>

            <div
              className="banner-box arrow-banner"
              onClick={handleArrowClick}
              data-aos="zoom-in"
            >
              <FcExpand size={20} />
            </div>
          </div>

          <div className="banner-right" data-aos="fade-left">
            <img src={bannerImg} alt="bannerImg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
