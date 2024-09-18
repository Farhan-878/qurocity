import React, { useEffect, useState } from "react";
import "./style.css"; // Make sure to create the CSS file for styling

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  // Update cursor position based on mouse movement
  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    // Add mousemove event listener
    window.addEventListener("mousemove", moveCursor);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  // Handle hover effects by adding/removing 'cursor-hover' class
  useEffect(() => {
    const handleMouseEnter = () => setHovered(true);
    const handleMouseLeave = () => setHovered(false);

    // Select all interactive elements (links, buttons, etc.)
    const interactiveElements = document.querySelectorAll(
      "a, button, .hover-target"
    );

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div
        className="mouse-cursor cursor-outer"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%)`,
        }}
      ></div>
      <div
        className={`mouse-cursor cursor-inner ${hovered ? "cursor-hover" : ""}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%)`,
        }}
      ></div>
    </>
  );
};

export default CustomCursor;
