import React, { useState, useEffect } from "react";
import { IoIosArrowUp } from "react-icons/io";
import "./style.css"; // Ensure you have the correct styles

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false); // State to control visibility
  const circleRadius = 49;
  const circumference = 2 * Math.PI * circleRadius; // Full length of the circular path

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY; // Amount of pixels scrolled
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight; // Total scrollable height
      const scrollPercentage = (scrollTop / docHeight) * 100; // Scroll percentage

      setProgress(scrollPercentage);
      // Show or hide the arrow based on scroll position
      setIsVisible(scrollTop > 100); // Adjust 100 to the threshold for when to show the arrow
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Calculate stroke-dashoffset based on progress
  const offset = circumference - (progress / 100) * circumference;

  // Function to scroll to the top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`progress-wrap ${isVisible ? "visible" : "hidden"}`}
      onClick={scrollToTop}
    >
      {/* Progress circle */}
      <svg
        className="progress-circle svg-content"
        width="100%"
        height="100%"
        viewBox="-1 -1 102 102"
      >
        <path
          d={`M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98`}
          style={{
            transition: "stroke-dashoffset 10ms linear",
            strokeDasharray: `${circumference}, ${circumference}`,
            strokeDashoffset: offset,
          }}
        />
      </svg>

      {/* Arrow icon */}
      <div className="arrow-wrap">
        <IoIosArrowUp className="arrow" size={20} />
      </div>
    </div>
  );
};

export default ScrollProgress;
