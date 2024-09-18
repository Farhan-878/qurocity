import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  Autoplay,
  Pagination,
  Navigation,
  EffectCoverflow,
  Mousewheel,
} from "swiper/modules";
import img1 from "../../assets/images/review-swapna.png";
import img2 from "../../assets/images/review-reeva.png";
import img3 from "../../assets/images/review-riya.png";

const reviews = [
  {
    name: "Swapna Jain",
    designation: "Korean TOPIK 1 Level 1 - Brewer – Maine, US",
    review:
      "Being part of a big organization, one of my 2023 goals was to learn a foreign language. So, I got to learn from Priya Nagpal, my Korean tutor at Qurocity. And what an experience it has been! I like everything about the course.I would recommend Qurocity and Priya Nagpal to everyone!",
    image: img1,
    alt: "Swapna Jain Review Online Language Learning",
  },
  {
    name: "Reeva Arsinghakar",
    designation: "Spanish B1 - Akola Maharashtra",
    review:
      "Firstly, it was a lot of fun to learn with Qurocity. The teaching process was perfect, and the tutor ensured I was thoroughly engaged. So I enjoyed it a lot! Their material helped me a lot too. Moreover, the platform is very organized and systematic. It was overall a great learning experience.",
    image: img2,
    alt: "Reeva Arsingha Review Online Language Learning",
  },
  {
    name: "Riya Malhotra",
    designation: "German A1 - Germany",
    review:
      "The German course was very good. I also found it very convenient as I could attend the course per my schedule. As I am studying medicine in Germany my language knowledge came handy. My tutor, Disha, was kind enough to make adjustments many times so that I could easily recover whenever I missed a session. I am definitely satisfied!",
    image: img3,
    alt: "Riya Malhotra Review Online Language Learning",
  },
];

const ReviewsSlider = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div className="reviews-slider-wrapper">
      <div className="container">
        <div className="reviews-slider-content">
          <h1 data-aos="fade-down">What our students have to say about us</h1>
          <div className="reviews-slider" data-aos="fade-up">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 10000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              effect={"coverflow"}
              grabCursor={true}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              navigation={false}
              modules={[
                Autoplay,
                Pagination,
                Navigation,
                Mousewheel,
                EffectCoverflow,
              ]}
              onAutoplayTimeLeft={onAutoplayTimeLeft}
              loop={true}
            >
              {reviews.map((review, index) => (
                <SwiperSlide key={index}>
                  <div className="review-slide">
                    <div className="profile-picture">
                      <img src={review.image} alt={review.alt} />
                    </div>
                    <div className="name">{review.name}</div>
                    <div className="designation">{review.designation}</div>
                    <div className="review-text">
                      <p>{review.review}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <div className="autoplay-progress" slot="container-end">
                <svg viewBox="0 0 48 48" ref={progressCircle}>
                  <circle cx="24" cy="24" r="20"></circle>
                </svg>
                <span ref={progressContent}></span>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsSlider;
