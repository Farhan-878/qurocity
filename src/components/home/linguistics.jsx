import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import group1 from "../../assets/images/Group-292.png";
import group2 from "../../assets/images/Group-293.png";
import group3 from "../../assets/images/Group-294.png";
import group4 from "../../assets/images/Group-295.png";
import group5 from "../../assets/images/Group-296.png";
import group6 from "../../assets/images/Group-297.png";
import { Autoplay } from "swiper/modules";
import "swiper/css"; // Import Swiper styles

const services = [
  { img: group1 },
  { img: group2 },
  { img: group3 },
  { img: group4 },
  { img: group5 },
  { img: group6 },
  { img: group1 },
  { img: group2 },
  { img: group3 },
  { img: group4 },
  { img: group5 },
  { img: group6 },
];

const Linguistics = () => {
  return (
    <div className="linguistics-content wave-carousel">
      <h1 data-aos="fade-down">
        Languages you can learn to channelize your linguistics career
      </h1>
      <div className="linguistics-box-wrapper">
        <Swiper
          spaceBetween={30}
          slidesPerView={7}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={3000}
          modules={[Autoplay]}
          breakpoints={{
            // when window width is >= 320px
            320: {
              slidesPerView: 2,
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 3,
            },
            // when window width is >= 1024px
            1024: {
              slidesPerView: 7,
            },
          }}
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <div className="linguistics-box">
                <div className="linguistics-box-img">
                  <img src={service.img} alt={`service-${index}`} />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Linguistics;
